"use client"

import ReviewCard from "@/components/home/review-card";
import Image from "next/image";
import {ArrowRight} from "lucide-react";


const Feature5 = () => {
    return <section className="mt-64 flex flex-col items-center  gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
        <div className={"w-[700px] flex flex-col gap-y-10 items-center justify-center"}>
           <Image src={"/roll-up-sleeves.png"} alt={"rollup"} width={400} height={400} />
            <h1 className="text-black font-extrabold text-3xl">
                Build stunning forms for free
            </h1>
            <p className="mt-2 text-gray-700 text-[16px] max-w-[350px] text-center">
                It’s as simple as one-two-three, and guess what? You don’t even need an account to try it out!
            </p>
        </div>
        <a className={"text-white bg-blue-500 hover:bg-blue-800 font-[600] pt-1 pr-[0.7em] pb-1 pl-[0.7em] text-[14px] rounded-[7px]  flex items-center justify-center gap-x-[0.6em] gap-y-[0.6em] transition duration-200"}>
            <p>Create a free form</p>
            <ArrowRight className={"w-4 h-4"} />
        </a>
    </section>
}

export default Feature5