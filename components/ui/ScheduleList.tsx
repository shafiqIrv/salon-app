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

const reservasi = [
    {
        name: "Budi",
        service: "Haircut",
        date: "2022-10-10",
        time: "10.00",
    },
    {
        name: "Herman",
        service: "Facial",
        date: "2022-11-10",
        time: "13.00",
    },
    {
        name: "Herman",
        service: "Facial",
        date: "2022-11-10",
        time: "13.00",
    },
    {
        name: "Herman",
        service: "Facial",
        date: "2022-11-10",
        time: "13.00",
    },
    {
        name: "Herman",
        service: "Facial",
        date: "2022-11-10",
        time: "13.00",
    },
    {
        name: "Herman",
        service: "Facial",
        date: "2022-11-10",
        time: "13.00",
    },
];

const ScheduleList = ({ refresh }) => {
    const [reservation, setReservation] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const initialReservation =
                    await db.query.reservationTable.findMany();
                setReservation(initialReservation);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, [refresh]); // Tambahkan refresh sebagai dependency

    return (
        <ScrollArea className="h-60 w-auto rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >Name</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead >Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reservasi.map((r, index) => (
                        <TableRow key={r.index}>
                            <TableCell>Mr/Mrs. {r.name}</TableCell>
                            <TableCell>{r.service}</TableCell>
                            <TableCell>{r.date}</TableCell>
                            <TableCell>{r.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ScrollArea>
    );
};

export default ScheduleList;
