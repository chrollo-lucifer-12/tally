"use client"

import {usePathname} from "next/navigation";
import TallyIcon from "@/components/tally-icon";
import {ChevronRightIcon} from "lucide-react";

const BreadCrumb = () => {

    const pathname =  usePathname()

    const segments = pathname.split("/")


    return <div className={"text-xs text-gray-7 p-1 gap-x-1 items-center hidden sm:flex"}>
        <TallyIcon href={"/dashboard"}/>
        <ChevronRightIcon className={"text-gray-6 w-4 h-4"} />
        <p className={"ml-2 hover:text-black cursor-pointer transition duration-200"}>
            {segments[1].charAt(0).toUpperCase() + segments[1].slice(1)}
        </p>
    </div>
}

export default BreadCrumb