import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

export const db = drizzle(pool);
