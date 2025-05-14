"use client"

import Image from "next/image";

interface ReviewCardProps {
    review : string
    name : string
    designation : string
}

const ReviewCard = ({designation, name, review} : ReviewCardProps) => {
    return <div className={"sm:w-[700px] w-[300px]"}>
        <p className={"w-full text-center font-extrabold text-gray-7 text-xl"}>{review}</p>
        <div className={"flex items-center justify-center mt-2 gap-x-2"}>
            <Image src={"/quote-nathan.png"} alt={"nathan"} width={30} height={30}/>
            <div className={"flex flex-col"}>
                <p className={"font-bold text-[12px] text-black"}>{name}</p>
                <p className={" text-[10px] text-black"}>{designation}</p>
            </div>
        </div>
    </div>
}

export default ReviewCard