"use client"

import Image from "next/image";
import {useRouter} from "next/navigation";

let routes = ["Pricing", "Log in", "Sign up", "Create form"]

const Navbar = () => {

    const router = useRouter()

    return <div className={"p-[20px] w-full flex items-center justify-between"}>
        <Image src={"/logo.png"} alt={"logo"} width={60} height={60} className={"w-[70px] h-[28px] cursor-pointer"}
               onClick={() => {
                   router.push("/")
               }}/>
        <div className={"flex gap-x-2"}>
            {
                routes.map((route,i) => (
                    <a key={i} href={"/pricing"}
                       className={` ${i==3 ? "text-white bg-blue-500 hover:bg-blue-800" : "text-gray-7 hover:bg-gray-3 hover:text-gray-9"} font-[600] pt-1 pr-[0.7em] pb-1 pl-[0.7em] text-[14px] rounded-[7px]  flex items-center justify-center gap-x-[0.6em] gap-y-[0.6em] transition duration-200`}>{route}</a>
                ))
            }
        </div>
    </div>
}

export default Navbar