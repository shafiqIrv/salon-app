"use client";

import * as React from "react";
import { useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Rating from "./Rating";
import { db } from "@/db";
import { reviewTable } from "@/db/schema";
import ReviewList from "./ReviewList";

export function RatingTable() {
    const { toast } = useToast();
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [refresh, setRefresh] = useState(false);

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

        if (name && rating && comment) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleRatingChange = (value) => {
        setRating(value);

        if (name && rating && comment) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleSubmit = async () => {
        try {
            await db.insert(reviewTable).values({
                name: name,
                rating: rating,
                comment: comment,
            });

            toast({
                description: "Review Added Successfully!",
            });

            setRefresh(!refresh);
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Oops! Something went wrong!",
                description: "Failed to add review to database.",
            });
        }

        const newReview = [name, rating, comment];
        // reviews.unshift(newReview);

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
            <ReviewList refresh={refresh} />
        </>
    );
}

export default RatingTable;
