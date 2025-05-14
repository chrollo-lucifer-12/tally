"use client"

import Image from "next/image";
import LoadingSpinner from "@/components/loading-spinner";
import Link from "next/link";

interface CustomButtonProps {
    src?: string
    title: string
    cn?: string
    type?: "button" | "reset" | "submit"
    pending?: boolean
    href ?: string
}

const CustomButton = ({ src, title, cn, type = "button", pending, href }: CustomButtonProps) => {
    return (
        <button
            type={type}
            disabled={pending}
            className={`border-[1px] border-gray-5 h-[32px] rounded-[8px] flex justify-center pl-[0.9em] pr-[0.9em] text-gray-7 cursor-pointer hover:bg-gray-100 hover:text-black transition duration-200 ${cn}`}
        >
            {
                href ? (<Link href={href} className={`w-[70%] flex items-center ${src ? "justify-between" : "justify-center"}`}>
                    {pending ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            {src && <Image src={src} alt="icon" width={20} height={20} />}
                            <p className="text-[12px]">{title}</p>
                        </>
                    )}
                </Link>) : (
                    <div className={`w-[70%] flex items-center ${src ? "justify-between" : "justify-center"}`}>
                        {pending ? (
                            <LoadingSpinner />
                        ) : (
                            <>
                                {src && <Image src={src} alt="icon" width={20} height={20} />}
                                <p className="text-[12px] w-fit">{title}</p>
                            </>
                        )}
                    </div>
                )
            }

        </button>
    )
}

export default CustomButton
