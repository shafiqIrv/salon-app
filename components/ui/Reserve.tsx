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
import { Phone } from "lucide-react";
import { PhoneNumberInput } from "./PhoneNumber";
import { Schedule } from "./Schedule";
import ScheduleList from "./ScheduleList";
import { useState } from "react";

export function Reserve() {
    const [refresh, setRefresh] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="m-5">Reserve now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Reservation</DialogTitle>
                    <DialogDescription>
                        Make sure to check the schedule before reserving.
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
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Phone Number
                        </Label>
                        <PhoneNumberInput />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Services
                        </Label>
                        <Services />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Date
                        </Label>
                        <DateSchedule />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Time
                        </Label>
                        <TimeSchedule />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
