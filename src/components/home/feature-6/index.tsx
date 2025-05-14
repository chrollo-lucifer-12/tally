"use client"

import ReviewCard from "@/components/home/review-card";
import Image from "next/image";
import {ArrowRight} from "lucide-react";


const Feature5 = () => {
    return <section className="mt-64 flex justify-between items-center  gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
        <Image src={"/particles-left.png"} alt={"faces"} width={100} height={600} />
        <div>
            <div className={"w-[700px] flex flex-col gap-y-10 items-center justify-center"}>
                <Image src={"/roll-up-sleeves.png"} alt={"rollup"} width={400} height={400}/>
                <h1 className="text-black font-extrabold text-3xl">
                    Build stunning forms for free
                </h1>
                <p className="mt-2 text-gray-700 text-[16px] max-w-[350px] text-center">
                    It’s as simple as one-two-three, and guess what? You don’t even need an account to try it out!
                </p>
            </div>
        </div>
        <Image src={"/particles-right.png"} alt={"faces"} width={100} height={600} />
    </section>
}

export default Feature5