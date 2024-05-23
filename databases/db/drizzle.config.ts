import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL as string,
  },
} satisfies Config;
