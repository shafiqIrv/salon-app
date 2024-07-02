import { db } from "@/db";
import { InsertReview, reviewTable , reserveTable, InsertReservation} from './schema';

export async function createUser(data: InsertReview) {
  await db.insert(reviewTable).values(data);
}

export async function getAllReviews() {
  return await db.query.reviewTable.findMany();
}