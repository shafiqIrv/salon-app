import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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

const ScheduleList = ({ refresh }) => {
    const [reservation, setReservation] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const initialReservation = await db.query.reservationTable.findMany();
                setReservation(initialReservation);
            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        };

        fetchReservations();
    }, [refresh]);

    const formatTime = (time) => {
        const [hour, minute] = time.split(":");
        return `${hour.padStart(2, "0")}.${minute}`;
    };

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
                    {reservation.map((r, index) => (
                        <TableRow key={index}>
                            <TableCell>Mr/Mrs. {r.name}</TableCell>
                            <TableCell>{r.service}</TableCell>
                            <TableCell>{new Date(r.date).toISOString().substring(0, 10)}</TableCell>
                            <TableCell>{formatTime(r.time)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ScrollArea>
    );
};

export default ScheduleList;
