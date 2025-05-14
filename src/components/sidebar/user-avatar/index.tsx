"use client"

import Image from "next/image";
import {ChevronDown} from "lucide-react";

interface UserAvatarProps {
    name : string
    src : string
}

const UserAvatar = ({name,src} : UserAvatarProps) => {
    return <div className={"flex items-center gap-x-1"}>
        <div className={"flex items-center gap-x-1"}>
            <Image src={src} alt={"avatar"} width={18} height={20} className={"rounded-full cursor-pointer"}/>
            <p className={"text-gray-8 text-[11px]"}>{name}</p>
        </div>
        <div className={"p-1 hover:bg-gray-3 rounded-md transition duration-200 cursor-pointer"}>
            <ChevronDown className={"text-gray-9 w-3 h-3  "} />
        </div>
    </div>
}

export default UserAvatar