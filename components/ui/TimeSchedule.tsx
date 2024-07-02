"use client";
import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface TimeScheduleProps {
    value: string;
    onChange: (value: string) => void;
}

export function TimeSchedule({ value, onChange }: TimeScheduleProps) {
    const [open, setOpen] = React.useState(false);

    const hours = Array.from({ length: 13 }, (_, index) => ({
        value: `${index + 9}:00`,
        label: `${index + 9}:00`,
    }));

    const handleSelect = (selectedValue: string) => {
        onChange(selectedValue);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[240px] justify-between"
                >
                    {value || "Select time..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px] max-h-60 overflow-y-auto p-0">
                <div>
                    {hours.map((hour) => (
                        <div
                            key={hour.value}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleSelect(hour.value)}
                        >
                            {hour.label}
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
