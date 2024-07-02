// ScheduleList.tsx

import React, { useEffect, useState } from "react";
import { asc } from "drizzle-orm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "@/db";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { reservationTable } from "@/db/schema";

const formatTime = (time: number) => {
    if (time < 10) {
        return <>0{time}.00</>;
    } else {
        return <>{time}.00</>;
    }
};

interface Reservation {
    name: string;
    service: string;
    date: string;
    time: number;
}

const ScheduleList: React.FC<{ refresh: boolean }> = ({ refresh }) => {
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const initialReservations =
                    await db.query.reservationTable.findMany({
                        orderBy: [
                            asc(reservationTable.service),
                            asc(reservationTable.date),
                            asc(reservationTable.time),
                        ],
                    });
                setReservations(initialReservations);
            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        };

        fetchReservations();
    }, [refresh]);

    return (
        <ScrollArea className="h-60 w-auto rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reservations.map((r, index) => (
                        <TableRow key={index}>
                            <TableCell>Mr/Mrs. {r.name}</TableCell>
                            <TableCell>{r.service}</TableCell>
                            <TableCell>
                                {new Date(r.date)
                                    .toISOString()
                                    .substring(0, 10)}
                            </TableCell>
                            <TableCell>{formatTime(r.time)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ScrollArea>
    );
};

export default ScheduleList;
