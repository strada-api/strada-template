import "dotenv/config";
import type { Config } from "drizzle-kit";
console.log("SCRT_DB_URL: ", process.env.SCRT_DB_URL);
export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.SCRT_DB_URL as string,
  },
} satisfies Config;
