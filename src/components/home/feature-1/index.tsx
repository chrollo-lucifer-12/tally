"use client";

import Image from "next/image";
import {Lock} from "lucide-react";
import ReviewCard from "@/components/home/review-card";

const Feature1 = () => {
    return (
        <section className="mt-32 flex flex-col items-center  gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
            <div className={"w-[700px]"}>
                <h1 className="text-black font-extrabold text-3xl">
                    A form builder like no other
                </h1>
                <p className="mt-2 text-gray-700 text-[16px] max-w-[1200px]">
                    Tally makes it simple for anyone to build free online forms. No need to code — just type your questions like you would in a doc.
                </p>
            </div>

            <div className="rounded-2xl w-[700px] h-auto border p-10 text-black shadow-[0_0_0_2px_rgb(248,28,229),0_0_0_4px_rgba(248,28,229,0.36)]">
                <p className="text-[18px] font-[1000] bg-gradient-to-r from-[#8A46FF] to-[#F81CE0] bg-clip-text text-transparent">
                    Unlimited forms and submissions for free
                </p>
                <p className="max-w-[620px] mt-1 text-sm">
                    Paywalls getting in the way? Not anymore. Tally gives you unlimited forms and submissions, completely free, as long as you stay within our fair usage guidelines.
                </p>
            </div>

            <div className={"w-[700px] flex gap-x-10"}>
                <div className={"w-[60%] rounded-2xl border border-gray-6 p-[32px]"}>
                    <Image src={"/icon1.svg"} alt={"icon1"} width={20} height={20} className={"text-pink-500"}/>
                    <h1 className={"mt-2 font-extrabold text-black"}>Just start typing</h1>
                    <p className={"text-xs text-black mt-1"}>Tally is a new type of online form builder that works like a text document. Just start typing on the page and insert blocks same as Notion.</p>
                    <video playsInline muted autoPlay loop width={"100%"} className={"mt-2"}>
                        <source src={"/just-type-card.mp4"} type={"video/mp4"} />
                    </video>
                </div>
                <div className={"w-[40%] rounded-2xl border border-gray-6 p-[32px]"}>
                    <Lock className={"text-pink-500"}/>
                    <h1 className={"mt-2 font-extrabold text-black"}>Privacy-friendly form builder</h1>
                    <p className={"text-xs text-black mt-1"}>
                        Your data privacy and security are our top priorities. We are GDPR compliant and treat your data with care and confidentiality.
                    </p>
                    <p className={"text-xs text-black mt-2"}>
                        Your data privacy and security are our top priorities. We are GDPR compliant and treat your data with care and confidentiality.
                    </p>
                </div>
            </div>
            <ReviewCard review={`“Loving Tally! Not sure why I only started using it now, so good!”`} name={"Natan Castiel"} designation={"Head of Growth, Gelt"}/>
        </section>
    );
};

export default Feature1;
