"use client";
import * as React from "react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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
import Rating from "./Rating";

const initialReviews = [
    ["Budi Santoso", 5, "I love SEA Salon!"],
    ["Joko Susilo", 2, "Bad service"],
    ["Rudi Setiawan", 4, "Good service"],
    ["Dewi Lestari", 3, "Average service"],
];

export function RatingTable() {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [reviews, setReviews] = useState(initialReviews);

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        switch (id) {
            case "name":
                setName(value);
                break;
            case "comment":
                setComment(value);
                break;
            default:
                break;
        }

        // Ngecek fieldnya kosong ga
        if (name && rating && comment) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleRatingChange = (value) => {
        setRating(value);

        // Ngecek fieldnya kosong ga
        if (name && rating && comment) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleSubmit = () => {
        // Buat review baru
        const newReview = [name, rating, comment];

        // Nambah review baru ke array
        reviews.unshift(newReview);

        // Reset form fields
        setName("");
        setRating(0);
        setComment("");
        setIsFormValid(false);
    };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="m-5">
                        Add Review
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Fill your review</DialogTitle>
                        <DialogDescription>
                            We're very open to every feedback that you have in
                            mind
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={handleInputChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="rating" className="text-right">
                                Rating
                            </Label>
                            <Rating onRatingChange={handleRatingChange} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="comment" className="text-right">
                                Comment
                            </Label>
                            <Input
                                id="comment"
                                value={comment}
                                onChange={handleInputChange}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={!isFormValid}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <ScrollArea className="h-72 w-[500px] rounded-md border mb-10">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">
                        Reviews
                    </h4>
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="text-m font-bold">{review[0]}</div>
                            <div className="text-sm">{review[1]}/5</div>
                            <div className="text-sm">{review[2]}</div>
                            <Separator className="my-2" />
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </>
    );
}

export default RatingTable;
