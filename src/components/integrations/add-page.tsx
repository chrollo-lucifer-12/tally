"use client"

import Image from "next/image";

const AddPage = ({src, title, description} : {src : string, title : string, description : string}) => {
    return <div className={"flex flex-col gap-y-6 items-center justify-center w-full"}>
        <div className={"flex gap-x-2 w-[50%] items-center justify-center"}>
            <Image src={"/icon-2.svg"} alt={"icon"} width={25} height={25} />
            <Image src={"/circles.svg"} alt={"icon"} width={25} height={25} />
            <Image src={src} alt={"icon"} width={25} height={25} />
        </div>
        <div className={"flex flex-col gap-y-1 items-center justify-center text-2xl w-[80%]"}>
            <p className={"text-black font-semibold"}>{title}</p>
            <p className={"text-black text-[8px] max-w-[250px] text-center"}>{description}</p>
        </div>
    </div>
}

export default AddPage