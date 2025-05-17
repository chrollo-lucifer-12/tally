"use client"

import Image from "next/image";
import {
     Code2,
    Layout,
    Palette,
    ImageIcon
} from "lucide-react";
import FeatureCard from "@/components/home/feature-card";
import {Youtube} from "lucide-react";
import {FileStack} from "lucide-react";
import {Languages} from "lucide-react";
import {useEffect, useState} from "react";


const images = ["customization-1.png", "customization-2.png", "customization-3.png"]
const features = [
    {
        icon: Layout,
        title: "Column layout.",
        content: "Display content side-by-side using columns."
    },
    {
        icon: Code2,
        title: "Custom CSS.",
        content: "Inject custom CSS to fully control your form design."
    },
    {
        icon: ImageIcon,
        title: "Images.",
        content: "Add a logo, cover image and embed visuals."
    },
    {
        icon: Youtube,
        title: "Embed online content.",
        content: "Embed YouTube, Calendly, Maps, and more."
    },
    {
        icon: FileStack,
        title: "Multi-page forms.",
        content: "Create a single-page or multi-page form."
    },
    {
        icon: Languages,
        title: "50+ supported languages.",
        content: "Translate the default form messages for respondents worldwide."
    }
];

const Feature3 = () => {

    const [currImage, setCurrImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return <section className="mt-32 flex flex-col items-center  gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
        <div className={"sm:w-[600px] md:w-[700px] w-[300px] flex justify-between items-center"}>
            <div>

            <h1 className="text-black font-extrabold sm:text-3xl text-lg">
                Make forms uniquely yours
            </h1>
            <p className="mt-2 text-gray-700 text-[12px] max-w-[250px] sm:text-[16px] sm:max-w-[1200px]">
                Easily customize the design and layout to fit any form to your brand.
            </p>
            </div>
            <Image src={"/customize.png"} alt={"smart"} width={250} height={250} className={"hidden sm:block"}/>
        </div>
        <div className={"rounded-2xl sm:w-[600px] md:w-[700px] w-[300px] h-auto border border-gray-6 p-10 text-black"}>
            <Palette className={"text-purple-500"} />
            <h1 className={"mt-2 font-extrabold text-black"}>Customize your form</h1>
            <p className={"text-xs text-black mt-1"}>Use our pre-made themes or create your own design by customizing colors, fonts, buttons, and more.</p>
            <div className={" border border-gray-4 rounded-md shadow-md mt-10"}>
                <div className={"h-10 flex gap-x-2 items-center p-2"}>
                    <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"}/>
                    <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"}/>
                    <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"}/>
                </div>
                <div className={"border border-gray-4"}>
                    <Image src={`/${images[currImage]}`} alt={`form image ${currImage}`} width={700} height={500} className={"transition-opacity duration-700 ease-in-out"} />
                </div>
            </div>
        </div>
        <div className={"sm:w-[600px] md:w-[700px] w-[300px] grid sm:grid-cols-3"}>
            {
                features.map((feature, i) => (
                    <FeatureCard key={i} icon={feature.icon} title={feature.title} content={feature.content} />
                ))
            }
        </div>
    </section>
}

export default Feature3