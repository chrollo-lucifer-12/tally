"use client"
import Image from "next/image";


const Feature5 = () => {
    return <section className="mt-64 flex justify-between items-center gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
        <Image src={"/particles-left.png"} alt={"faces"} width={100} height={600} className={"hidden lg:block"}/>
        <div className={"flex items-center justify-center"}>
            <div className={"sm:w-[600px] md:w-[700px] w-[300px] flex flex-col gap-y-10 items-center justify-center"}>
                <Image src={"/roll-up-sleeves.png"} alt={"rollup"} width={400} height={400}/>
                <h1 className="text-black font-extrabold sm:text-3xl text-lg">
                    Build stunning forms for free
                </h1>
                <p className="mt-2 text-gray-700 text-[12px] max-w-[250px] sm:text-[16px] sm:max-w-[1200px text-center]">
                    It’s as simple as one-two-three, and guess what? You don’t even need an account to try it out!
                </p>

            </div>
        </div>
        <Image src={"/particles-right.png"} alt={"faces"} width={100} height={600} className={"hidden lg:block"}/>
    </section>
}

export default Feature5