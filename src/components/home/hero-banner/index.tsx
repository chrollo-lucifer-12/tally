"use client"

import {ArrowRight} from "lucide-react";
import Image from "next/image";

const HeroBanner = () => {
    return <div className={"w-full mt-32 flex flex-col items-center justify-center p-6"}>
        <Image src={"/faces-mobile.png"} alt={"faces"} width={500} height={100} className={"sm:hidden"} />
        <Image src={"/squiggles.png"} alt={"squiggles"} width={100} height={100} className={"absolute z-10 left-30 top-[190px] hidden sm:block"}/>
        <h1 className={"relative mb-12 leading-none -tracking-[2px] text-black text-center text-[35px] sm:text-[65px] font-[1000]"}>The simplest way to create forms</h1>
        <Image src={"/title-highlight-2.png"} alt={"title-highlight"} width={200} height={200}/>
        <p className={"mb-14 text-center max-w-[600px] text-gray-8 font-[600]"}>Say goodbye to boring forms. Meet Tally — the free, intuitive form builder you’ve been looking for.</p>
        <div className={"flex flex-col gap-y-2"}>
            <a className={"text-white bg-blue-500 hover:bg-blue-800 font-[600] pt-1 pr-[0.7em] pb-1 pl-[0.7em] text-[14px] rounded-[7px]  flex items-center justify-center gap-x-[0.6em] gap-y-[0.6em] transition duration-200"}>
                <p>Create a free form</p>
                <ArrowRight className={"w-4 h-4"} />
            </a>
            <p className={"text-gray-7 text-[13px] text-center"}>No signup required</p>
        </div>
    </div>
}

export default HeroBanner