import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

/**
 * prepare : false를 하는 이유는 connection pooling을 지원하지 않기 때문. drizzle는 이를 지원하지 않음.
 */
const client = postgres(process.env.DATABASE_URL!, { prepare: false });

export const db = drizzle(client);
