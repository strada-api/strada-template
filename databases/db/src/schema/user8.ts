import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user8 = pgTable("user8", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
