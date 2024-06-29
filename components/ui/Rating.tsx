"use client";

import { useState } from "react";

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index) => {
        setRating(index);
    };

    return (
        <div className="flex space-x-1 m-5">
            {[1, 2, 3, 4, 5].map((index) => (
                <div
                    key={index}
                    className="relative cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                >
                    <img
                        src="/like.png"
                        alt="like"
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${
                            index <= (hoverRating || rating)
                                ? "opacity-0"
                                : "opacity-100"
                        }`}
                    />
                    <img
                        src="/liked.png"
                        alt="liked"
                        className={`w-full h-full transition-opacity duration-300 ease-in-out ${
                            index <= (hoverRating || rating)
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                    />
                </div>
            ))}
        </div>
    );
};

export default Rating;
