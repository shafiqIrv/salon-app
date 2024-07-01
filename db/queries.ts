import { db } from "@/db";
import { InsertReview, reviewTable } from './schema';

export async function createUser(data: InsertReview) {
  await db.insert(reviewTable).values(data);
}
