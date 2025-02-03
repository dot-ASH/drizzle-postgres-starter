import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const userSchema = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: text("age"),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type User = InferSelectModel<typeof userSchema>;
export type NewUser = InferInsertModel<typeof userSchema>;
