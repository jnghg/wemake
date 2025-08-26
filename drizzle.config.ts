// drizzle kit이 참고하는 파일
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/features/**/schema.ts",
  out: "./app/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
