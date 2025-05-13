"use client"


const TutorialVideo = () => {
    return <div className={"flex items-center justify-center mt-10 "}>
        <div className={" border border-gray-4  w-[80%] rounded-md shadow-md"}>
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
    </div>
}

export default TutorialVideo