"use client"


import Image from "next/image";

const TutorialVideo = () => {
    return <div className={"flex items-center justify-center sm:justify-between mt-10 p-6"}>
        <Image src={"/faces-left.png"} alt={"faces"} width={100} height={500} className={"ml-20 w-[20%] hidden sm:block"} />
        <div className={" border border-gray-4 w-full  sm:w-[60%] rounded-md shadow-md"}>
            <div className={"h-10 flex gap-x-2 items-center p-2"}>
                <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"} />
                <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"} />
                <div className={"rounded-full w-[10px] h-[10px] bg-gray-6"} />
            </div>
            <div className={"border border-gray-4"}>
                <video playsInline muted autoPlay loop width={"100%"}>
                    <source src={"/intro.mp4"} type={"video/mp4"} />
                </video>
            </div>
        </div>
        <Image src={"/faces-right.png"} alt={"faces"} width={100} height={500} className={"ml-20 w-[20%]  hidden sm:block"} />
    </div>
}

export default TutorialVideo