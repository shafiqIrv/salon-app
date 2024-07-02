"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TimeSchedule } from "./TimeSchedule";
import DateSchedule from "./DateSchedule";
import { Services } from "./Services";
import { PhoneNumberInput } from "./PhoneNumber";
import ScheduleList from "./ScheduleList";
import { useState } from "react";
import { db } from "@/db";
import { reservationTable } from "@/db/schema";
import { useToast } from "@/components/ui/use-toast";

export function Reserve() {
    const { toast } = useToast();
    const [refresh, setRefresh] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = async () => {
        if (!name || !phone || !service || !date || !time) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "All fields are required.",
            });
            return;
        }

        try {
            await db.insert(reservationTable).values({
                name,
                phone: parseInt(phone),
                service,
                date,
                time: parseInt(time),
            });

            toast({
                description: "Reservation Added Successfully!",
            });

            setRefresh(!refresh);
            setName("");
            setPhone("");
            setService("");
            setDate("");
            setTime("");
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Oops! Something went wrong!",
                description:
                    "Failed to add reservation to database. Make sure the date and time are available.",
            });
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="m-5">Reserve now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle>Reservation</DialogTitle>
                    <DialogDescription>
                        Please review the schedule below before making a
                        reservation. Note that only one service is available per
                        session.
                    </DialogDescription>
                </DialogHeader>
                <ScheduleList refresh={refresh} />
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                            Phone Number
                        </Label>
                        <PhoneNumberInput value={phone} onChange={setPhone} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="service" className="text-right">
                            Services
                        </Label>
                        <Services value={service} onChange={setService} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                            Date
                        </Label>
                        <DateSchedule value={date} onChange={setDate} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">
                            Time
                        </Label>
                        <TimeSchedule value={time} onChange={setTime} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Reserve;
