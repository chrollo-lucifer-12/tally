"use client"

import Image from "next/image";

interface CustomButtonProps {
    src ?: string
    title : string
    cn ?: string
}

const CustomButton = ({src, title, cn} : CustomButtonProps) => {
    return <button
        className={`border-[1px] border-gray-5 rounded-[8px] flex justify-center h-[36px] pl-[0.9em] pr-[0.9em] text-gray-7 cursor-pointer hover:bg-gray-100 hover:text-black transition duration-200 ${cn}`}>
        <div className={`w-[70%] flex items-center ${src ? "justify-between" : "justify-center"}`}>
            {src && (<Image src={src} alt={"icon"} width={20} height={20}/>)}
            <p>{title}</p>
        </div>
    </button>
}

export default CustomButton