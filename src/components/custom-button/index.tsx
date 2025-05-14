"use client"

import Image from "next/image";
import LoadingSpinner from "@/components/loading-spinner";

interface CustomButtonProps {
    src?: string
    title: string
    cn?: string
    type?: "button" | "reset" | "submit"
    pending?: boolean
}

const CustomButton = ({ src, title, cn, type = "button", pending }: CustomButtonProps) => {
    return (
        <button
            type={type}
            disabled={pending}
            className={`border-[1px] border-gray-5 h-[32px] rounded-[8px] flex justify-center pl-[0.9em] pr-[0.9em] text-gray-7 cursor-pointer hover:bg-gray-100 hover:text-black transition duration-200 ${cn}`}
        >
            <div className={`w-[70%] flex items-center ${src ? "justify-between" : "justify-center"}`}>
                {pending ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        {src && <Image src={src} alt="icon" width={20} height={20} />}
                        <p className="text-[12px]">{title}</p>
                    </>
                )}
            </div>
        </button>
    )
}

export default CustomButton
