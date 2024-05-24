import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.SCRT_DB_URL as string,
  },
} satisfies Config;
