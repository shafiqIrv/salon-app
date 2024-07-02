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

export const reservationTable = sqliteTable(
    "reservation",
    {
        name: text("name").notNull(),
        phone: integer("phone").notNull(),
        service: text("service").notNull(),
        date: text("date").notNull(),
        time: integer("time").notNull(),
    },
    (reservation) => ({
        compositePk: primaryKey(
            reservation.service,
            reservation.date,
            reservation.time
        ),
    })
);

export type InsertReservation = typeof reservationTable.$inferInsert;
export type SelectReservation = typeof reservationTable.$inferSelect;
