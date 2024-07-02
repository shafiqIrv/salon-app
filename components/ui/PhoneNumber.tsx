"use client";
import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

interface PhoneNumberInputProps {
    value: string;
    onChange: (value: string) => void;
}

export function PhoneNumberInput({ value, onChange }: PhoneNumberInputProps) {
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onChange(value);

        // Validasi pake rege
        const regex = /^[0-9]{6,14}$/;
        setIsValid(regex.test(value));
    };

    return (
        <div className="grid grid-cols-2 items-center gap-4 col-span-3">
            <Input
                type="tel"
                id="phoneNumber"
                value={value}
                onChange={handleInputChange}
                className={`col-span-3 ${isValid ? "" : "border-red-500"}`}
                placeholder="1234567890"
            />
            {!isValid && (
                <span className="col-span-4 text-red-500 text-sm">
                    Please enter a valid phone number.
                </span>
            )}
        </div>
    );
}
