import { sql } from "drizzle-orm";
import {
    integer,
    primaryKey,
    sqliteTable,
    text,
} from "drizzle-orm/sqlite-core";

export const reviewTable = sqliteTable(
    "reviews",
    {
        name: text("name").notNull(),
        rating: integer("rating").notNull(),
        comment: text("comment").notNull(),
    },
    (reviews) => ({
        compositePk: primaryKey(reviews.name, reviews.rating, reviews.comment),
    })
);

export type InsertReview = typeof reviewTable.$inferInsert;
export type SelectReview = typeof reviewTable.$inferSelect;
