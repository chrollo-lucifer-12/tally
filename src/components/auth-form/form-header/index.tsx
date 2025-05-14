"use client"

import Link from "next/link";
import Image from "next/image";

const FormHeader = ({signup} : {signup : boolean}) => {
    return <header className={"flex flex-col gap-y-10 justify-center"}>
        <Link href={"/"} className={"bg-transparent text-gray-7"}>
            <Image src={"/icon-2.svg"} alt={"icon"} width={20} height={20} className={"filter text-gray-7"}/>
        </Link>
        <span>
            <p className={"text-black text-[20px] font-[700]"}>{signup ? "Create your Tally account" : "Welcome back"}</p>
            {
                signup && <p className={"text-gray-5 text-[12px] font-[600] mt-10px leading-[1.25]"}>Get started with the simplest way to create forms.</p>
            }
            </span>
    </header>
}
export default FormHeader