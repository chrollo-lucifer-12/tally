"use client"

import Image from "next/image";
import FeatureCard from "@/components/home/feature-card";
import {User, AtSign, CreditCard, Signature, Trophy, Upload, Calendar} from "lucide-react";


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
    return  <section className="mt-32 flex flex-col items-center  gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
        <div className={"w-[700px]"}>
            <h1 className="text-black font-extrabold text-3xl">
                Simple but powerful
            </h1>
            <p className="mt-2 text-gray-700 text-[16px] max-w-[350px]">
                Advanced features packed in a simple form builder. It couldn’t be easier to create forms that convert.
            </p>
        </div>
        <div className={"rounded-2xl w-[700px] h-auto border border-gray-6 p-10 text-black"}>
            <Image src={"/icon2.svg"} alt={"icon1"} width={20} height={20} className={"text-pink-500"}/>
            <h1 className={"mt-2 font-extrabold text-black"}>Build any form in seconds</h1>
            <p className={"text-xs text-black mt-1"}>Easily create online forms using our wide range of free input blocks. Collect contact info, files, signatures, payments, and much more. Build everything from surveys to quizzes to lead generation forms.</p>
            <Image src={"/input-badges.png"} alt={'input-badges'} width={100} height={100} className={"w-full"} />

        </div>
        <div className={"w-[700px] grid grid-cols-3"}>
            {
                features.map((feature, i) => (
                    <FeatureCard key={i} icon={feature.icon} title={feature.title} content={feature.content} />
                ))
            }
        </div>
    </section>
}

export default Feature2