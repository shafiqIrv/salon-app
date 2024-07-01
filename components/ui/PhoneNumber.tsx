"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PhoneNumberInput() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setPhoneNumber(value);

        // Validasi menggunakan pattern regex untuk format nomor telepon internasional (contoh)
        const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        setIsValid(regex.test(value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            // Proses lanjutan jika nomor telepon valid
            console.log("Phone number is valid:", phoneNumber);
        } else {
            // Handle jika nomor telepon tidak valid
            console.log("Invalid phone number:", phoneNumber);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 items-center gap-4 col-span-3"
        >
            <Input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                className={`col-span-3 ${isValid ? "" : "border-red-500"}`}
                placeholder="+1234567890"
            />
            {!isValid && (
                <span className="col-span-4 text-red-500 text-sm">
                    Please enter a valid phone number.
                </span>
            )}
        </form>
    );
}
