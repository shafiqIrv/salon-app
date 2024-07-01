"use client";
import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function TimeSchedule() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    const hours = Array.from({ length: 13 }, (_, index) => ({
        value: `${index + 9}:00`,
        label: `${index + 9}:00`,
    }));

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value || "Select time..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] max-h-60 overflow-y-auto p-0">
                <div>
                    {hours.map((hour) => (
                        <div
                            key={hour.value}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => {
                                setValue(hour.value);
                                setOpen(false);
                            }}
                        >
                            {hour.label}
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
