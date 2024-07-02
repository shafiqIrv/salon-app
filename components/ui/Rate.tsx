"use client";

const Rate = ({ rating }) => {
    return (
        <div className="flex space-x-1 h-3.5">
            {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="relative">
                    <img
                        src="/like.png"
                        alt="like"
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${
                            index <= rating ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <img
                        src="/liked.png"
                        alt="liked"
                        className={`w-full h-full transition-opacity duration-300 ease-in-out ${
                            index <= rating ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
            ))}
        </div>
    );
};

export default Rate;
