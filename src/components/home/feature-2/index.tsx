"use client"

import Image from "next/image";
import FeatureCard from "@/components/home/feature-card";
import {User, AtSign, CreditCard, Signature, Trophy, Upload, Calendar} from "lucide-react";
import {useEffect, useState} from "react";

const images = ["inputs-1.png", "inputs-4.png", "inputs-6.png"];
let features = [
    {
        icon : AtSign,
        title : "Contact info.",
        content : "Collect names, addresses, phone numbers, emails & links."
    },
    {
        icon : CreditCard,
        title : "Accept payments.",
        content : "Create checkout forms without code."
    },
    {
        icon : Signature,
        title : "Signatures.",
        content : "Accept e-signatures and streamline contract signing."
    },
    {
        icon : Trophy,
        title : "Rate & rank.",
        content : "Let users share their opinions using visually simple ratings, scales, and rankings."
    },
    {
        icon : Upload,
        title : "File uploads.",
        content : "Collect images, PDFs, video and audio files."
    },
    {
        icon : Calendar,
        title : "Date & Time.",
        content : "Allow respondents easily select date and time."
    },
]

const Feature2 = () => {

    const [currImage, setCurrImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);
;
    return <section className="mt-32 flex flex-col items-center  gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
        <div className={"sm:w-[600px] md:w-[700px] w-[300px] flex justify-between items-center"}>
            <div>
                <h1 className="text-black font-extrabold sm:text-3xl text-lg">
                    Simple but powerful
                </h1>
                <p className="mt-2 text-gray-700  text-[12px] max-w-[250px] sm:text-[16px] sm:max-w-[1200px]">
                    Advanced features packed in a simple form builder. It couldn’t be easier to create forms that
                    convert.
                </p>
            </div>
            <Image src={"/smart.png"} alt={"smart"} width={250} height={250} className={"hidden sm:block"} />
        </div>
        <div className={"rounded-2xl sm:w-[600px] md:w-[700px] w-[300px] h-auto border border-gray-6 p-10 text-black"}>
            <Image src={"/icon2.svg"} alt={"icon1"} width={20} height={20} className={"text-pink-500"}/>
            <h1 className={"mt-2 font-extrabold text-black"}>Build any form in seconds</h1>
            <p className={"text-xs text-black mt-1"}>Easily create online forms using our wide range of free input
                blocks. Collect contact info, files, signatures, payments, and much more. Build everything from surveys
                to quizzes to lead generation forms.</p>
            <div className={" border border-gray-4 mt-10 rounded-md shadow-md"}>
                <div className={"h-10 flex gap-x-2 items-center p-2"}>
                    <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"} />
                    <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"} />
                    <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"} />
                </div>
                <div className={"border border-gray-4"}>
                    <Image src={`/${images[currImage]}`} alt={`form image ${currImage}`} width={500} height={500} className={"transition-opacity duration-700 ease-in-out"} />
                </div>
            </div>
        </div>
        <div className={"sm:w-[600px] md:w-[700px] w-[300px] grid grid-cols-1 sm:grid-cols-3"}>
            {
                features.map((feature, i) => (
                    <FeatureCard key={i} icon={feature.icon} title={feature.title} content={feature.content}/>
                ))
            }
        </div>
    </section>
}

export default Feature2