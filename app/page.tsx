import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
import Rating from "@/components/ui/Rating";

const Home = () => {
    return (
        <>
            {/* Header content */}
            <header
                className="h-[800px] bg-cover bg-center flex items-center justify-center text-white text-5xl font-bold "
                style={{ backgroundImage: "url('/hairstyling.png')" }}
            >
                <h1 className="">Beauty and Elegance Redefined</h1>
            </header>
            {/* Main content */}
            <div className="flex flex-col  mt-[91px] items-center justify-center">
                <h2 className="bg-gradient-to-r from-[#929292] via-[#3490dc] to-[#38d8d0] text-transparent bg-clip-text font-bold text-[40px]">
                    Transform your look at SEA Salon now
                </h2>

                <Separator className="mt-10" />

                <Accordion type="multiple" collapsible className="w-1/4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Haircuts and Styling
                        </AccordionTrigger>
                        <AccordionContent>
                            <img
                                src="/hair.png"
                                alt="Description of your image"
                            />
                            <p>
                                Experience the transformative joy of a
                                nourishing new hairstyle.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Manicure and Pedicure
                        </AccordionTrigger>
                        <AccordionContent>
                            <img
                                src="/nail.png"
                                alt="Description of your image"
                            />
                            <p>
                                Experience the transformative joy of a
                                nourishing new hairstyle.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Facial Treatments</AccordionTrigger>
                        <AccordionContent>
                            <img
                                src="/face.png"
                                alt="Description of your image"
                            />
                            <p>
                                Experience the transformative joy of a
                                nourishing new hairstyle.
                            </p>
                            r.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Separator className="mb-10" />
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[18px] font-bold ">
                        Visited here before?
                    </h3>
                    <h4>Leave a review</h4>
                    <Rating />
                </div>
            </div>

            {/* Footer content */}
            <footer className="bg-gray-800 text-white  py-4 bottom-0">
                <p className="text-center">
                    © 2024 SEA Salon. All rights reserved.
                </p>

                <div className="flex flex-col items-start m-3">
                    <h5 className="font-bold">Contacts</h5>
                    <div className="grid grid-cols-2 gap-x-4">
                        <p className="whitespace-pre-wrap">Thomas</p>
                        <p className="whitespace-pre-wrap">08123456789</p>
                        <p className="whitespace-pre-wrap">Sekar</p>
                        <p className="whitespace-pre-wrap">08164829372</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
