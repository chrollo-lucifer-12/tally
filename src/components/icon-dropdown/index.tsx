"use client"

import {ChevronDownIcon} from "lucide-react";
import MobileLinks from "@/components/mobile-links";
import {useState} from "react";

const IconDropdown = () => {

    const [isOpen, setIsOpen] = useState(false)

    return <div className={"flex flex-col gap-y-1 m-2 relative"}>
        <div className={"flex flex-row gap-x-2 items-center text-gray-8"} onClick={() => {
            setIsOpen(prevState => !prevState)
        }}>
            <p>tally</p>
            <ChevronDownIcon className={" w-3 h-3"}/>
        </div>
        {isOpen && (
            <div className="absolute top-full left-0 z-[9999]">
                <MobileLinks />
            </div>
        )}
    </div>
}

export default IconDropdown