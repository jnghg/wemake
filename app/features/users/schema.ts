import {
  bigint,
  boolean,
  jsonb,
  pgEnum,
  pgSchema,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { products } from "../products/schema";
import { posts } from "../community/schema";

// users 테이블은 이미 supabase에 존재하기 때문에 fake로 생성 drizzle에서만 존재.
// 이후 push할 때 포함되지 않아야 함. (중복 안내문구가 나옴)
const users = pgSchema("auth").table("users", {
  id: uuid().primaryKey(),
});

export const roles = pgEnum("role", [
  "developer",
  "designer",
  "marketer ",
  "founder",
  "product-manger",
]);

/** 기본 유저 정보 */
export const profiles = pgTable("profiles", {
  profile_id: uuid()
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),

  avatar: text(),
  name: text().notNull(),
  username: text().notNull(),
  headline: text(),
  bio: text(),
  role: roles("role").default("developer"),

  // 팔로워, 팔로잉 수를 저장하기 위해 jsonb 사용.
  stats: jsonb().$type<{ followers: number; following: number }>(),
  views: jsonb(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

/** 팔로워, 팔로잉 관계 */
export const follows = pgTable("follows", {
  follower_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  following_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  created_at: timestamp().notNull().defaultNow(),
});

/** 알림 타입 */
export const notificationTypeEnum = pgEnum("notification_type", [
  "follow",
  "review",
  "replay",
  "mention",
]);

/** 알림 */
export const notifications = pgTable("notifications", {
  notification_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  source_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  product_id: bigint({ mode: "number" }).references(() => products.product_id, {
    onDelete: "cascade",
  }),
  post_id: bigint({ mode: "number" }).references(() => posts.post_id, {
    onDelete: "cascade",
  }),
  target_id: uuid()
    .references(() => profiles.profile_id, {
      onDelete: "cascade",
    })
    .notNull(),
  type: notificationTypeEnum().notNull(),
  created_at: timestamp().notNull().defaultNow(),
});

/** 메시지 룸 */
export const messageRooms = pgTable("message_rooms", {
  message_room_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  created_at: timestamp().notNull().defaultNow(),
});

/** 메시지 룸 멤버 */
export const messageRoomMembers = pgTable(
  "message_room_members",
  {
    message_room_id: bigint({ mode: "number" }).references(
      () => messageRooms.message_room_id,
      {
        onDelete: "cascade",
      }
    ),
    profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "cascade",
    }),
    created_at: timestamp().notNull().defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.message_room_id, table.profile_id] }),
  ]
);

/** 메시지 */
export const messages = pgTable("messages", {
  message_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  message_room_id: bigint({ mode: "number" }).references(
    () => messageRooms.message_room_id,
    {
      onDelete: "cascade",
    }
  ),
  sender_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  content: text().notNull(),
  seen: boolean().notNull().default(false),
  created_at: timestamp().notNull().defaultNow(),
});
