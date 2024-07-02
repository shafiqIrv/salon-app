"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function PhoneNumberInput({ value, onChange }) {
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (event) => {
        const { value } = event.target;
        onChange(value);

        // Validasi dengan regex
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
