import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

config({ path: ".env" });

const client = createClient({
    url: "libsql://sea-salon-shafiqirv.turso.io",
    authToken:
        "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTk4MjM2MTMsImlkIjoiOWE0Y2M1MTYtYTJiZi00MWMyLThiM2QtY2MxOGQyMmRjM2MwIn0.zzO93iZG_QgMz6KGG-cTXxEPwxEq3N5512PCm2HG7b3JiRweCghWlIeEir1Ds6_K_qbxuaSNwgSGHqKu9oDEBQ",
});

export const db = drizzle(client, { schema });
