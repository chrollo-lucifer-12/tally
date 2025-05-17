"use client"

import Image from "next/image";
import {AtSign, Bot, EyeOff, FileInput, Forward, MailCheck, MessageSquareDashed, Sigma} from "lucide-react";
import FeatureCard from "@/components/home/feature-card";
import ReviewCard from "@/components/home/review-card";

let features = [
    {
        icon : AtSign,
        title : "Answer piping.",
        content : "Mention answers from earlier questions to personalize your form."
    },
    {
        icon : MailCheck,
        title : "Email notifications.",
        content: "Send tailored emails to yourself and respondents."
    },
    {
        icon :Forward,
        title : "Redirect on completion.",
        content: "Forward respondents to another web page."
    },
    {
        icon : FileInput,
        title : "Pre-populate fields.",
        content:  "Save time by pre-filling form fields with data you already have about respondents."
    },
    {
        icon : Bot,
        title : "reCAPTCHA.",
        content: "Protect your forms from spam and bots."
    },
    {
        icon : MessageSquareDashed,
        title : "Partial submissions.",
        content: "Capture unfinished form submissions."
    }
]

const Feature3 = () => {
    return <section className="mt-32 flex flex-col items-center  gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
        <div className={"sm:w-[600px] md:w-[700px] w-[300px] flex justify-between items-center"}>
            <div>

            <h1 className="text-black font-extrabold text-lg sm:text-3xl">
                Craft intelligent forms
            </h1>
            <p className="mt-2 text-gray-700 text-[12px] max-w-[250px] sm:text-[16px] sm:max-w-[1200px]">
                Our smart features make it easy to turn your forms into a tailored experience for every respondent.
            </p>
            </div>
            <Image src={"/click-plus.png"} alt={"smart"} width={250} height={250} className={"hidden sm:block"}/>
        </div>
        <div className={"rounded-2xl sm:w-[600px] md:w-[700px] w-[300px] h-auto border border-gray-6 p-10 text-black"}>
            <Image src={"/icon2.svg"} alt={"icon1"} width={20} height={20} className={"text-pink-500"}/>
            <h1 className={"mt-2 font-extrabold text-black"}>Conditional logic</h1>
            <p className={"text-xs text-black mt-1"}>Build dynamic forms that adapt based on prior inputs or external
                data. Show and hide blocks, insert branching, or calculate values to create a personalized form
                experience.</p>
            <div className={" border border-gray-4 rounded-md shadow-md mt-10"}>
                <div className={"h-10 flex gap-x-2 items-center p-2"}>
                    <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"}/>
                    <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"}/>
                    <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"}/>
                </div>
                <div className={"border border-gray-4"}>
                    <Image src={"/smart-3.png"} alt={"smart-3"} width={500} height={500}/>
                </div>
            </div>
        </div>
        <div className={"sm:w-[600px] md:w-[700px] w-[300px] gap-x-10 flex flex-col sm:flex-row gap-y-10"}>
            <div className={"sm:w-[50%] rounded-2xl border border-gray-6 p-[32px]"}>
                <Sigma className={"text-pink-500"}/>
                <h1 className={"mt-2 font-extrabold text-black"}>Calculator</h1>
                <p className={"text-xs text-black mt-1"}>Use variables to create dynamic content and calculate values, scores, prices and more.</p>
                <Image src={"/smart-1.png"} alt={"smart-1"} width={500} height={300} className={""}/>
            </div>
            <div className={"sm:w-[50%] rounded-2xl border border-gray-6 p-[32px]"}>
                <EyeOff className={"text-pink-500"} />
                <h1 className={"mt-2 font-extrabold text-black"}>Hidden fields</h1>
                <p className={"text-xs text-black mt-1"}>
                    Pass data to your form with URL parameters. Include UTM parameters or personal data for a customized experience.
                </p>
                <Image src={"/smart-2.png"} alt={"smart-2"} width={300} height={300} className={""}/>
            </div>
        </div>
        <div className={"sm:w-[600px] md:w-[700px] w-[300px] grid sm:grid-cols-3"}>
            {
                features.map((feature, i) => (
                    <FeatureCard key={i} icon={feature.icon} title={feature.title} content={feature.content} />
                ))
            }
        </div>
        <ReviewCard review={`“Tally is doing to forms what Notion did to docs & sheets.”`} name={"Natan Castiel"} designation={"Head of Growth, Gelt"}/>
    </section>
}

export default Feature3