import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { db } from "@/db";
import Rate from "./Rate";

const ReviewList = ({ refresh }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const initialReviews = await db.query.reviewTable.findMany();
                setReviews(initialReviews);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, [refresh]);

    return (
        <ScrollArea className="h-72 w-[500px] rounded-md border mb-10">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">
                    Reviews
                </h4>
                {reviews
                    .slice()
                    .reverse()
                    .map((review, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="text-m font-bold">
                                {review.name}
                            </div>
                            <Rate rating={review.rating} />
                            <div className="text-sm">{review.comment}</div>
                            <Separator className="my-2" />
                        </div>
                    ))}
            </div>
        </ScrollArea>
    );
};

export default ReviewList;
