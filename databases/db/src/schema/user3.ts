import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user3 = pgTable("user3", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
