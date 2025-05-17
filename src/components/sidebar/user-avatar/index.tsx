"use client"

import Image from "next/image";
import {ChevronDown} from "lucide-react";
import {useState} from "react";
import MobileLinks from "@/components/mobile-links";

interface UserAvatarProps {
    name : string
    src : string
}

const UserAvatar = ({name,src} : UserAvatarProps) => {


    const [isOpen, setIsOpen] = useState(false)

    return <div className={"flex items-center gap-x-1"}>
        <div className={"flex items-center gap-x-1"}>
               <Image src={src || "https://github.com/shadcn.png"} alt={"avatar"} width={18} height={20} className={"rounded-full cursor-pointer"}/>

                 <p className={"text-gray-8 text-[11px]"}>{name}</p>

        </div>
        <div className={"p-1 hover:bg-gray-3 rounded-md transition duration-200 cursor-pointer flex flex-col relative"}>
            <ChevronDown className={"text-gray-9 w-3 h-3  "} onClick={() => setIsOpen(prevState => !prevState)} />
            {isOpen && (
                <div className="absolute top-full left-0 z-[9999]">
                    <MobileLinks />
                </div>
            )}
        </div>
    </div>
}

export default UserAvatar