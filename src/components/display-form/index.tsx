"use client"

import CustomButton from "@/components/custom-button";
import DisplayQuestion from "@/components/display-form/display-question";
import Link from "next/link";
import {SubmitResponse} from "@/app/r/actions";
import {useActionState} from "react";

interface DisplayFormProps {
    title : string
    questions : {
        formId: string
        id: string
        title: string
        type: string
    }[]
    formId : string
}

const DisplayForm = ({questions, title, formId} : DisplayFormProps) => {

     const [ state, action, pending] =  useActionState(SubmitResponse,undefined);

     if (state?.success) {
        return <div className={"w-full h-screen flex items-center justify-center flex-col gap-y-2"}>
            <h1 className={"text-black font-bold text-lg"}>Thanks for completing this form!</h1>
            <p className={"text-gray-8 text-sm"}>Made with Tally, the simplest way to create forms for free.</p>
            <CustomButton title={"Create your own form"} cn={"rounded-md text-black font-semibold hover:shadow-md"}/>
        </div>
     }

    return <div className={"w-full h-full p-[20px] sm:p-[100px] pt-[30px] sm:pt-[60px] pb-[30px] sm:pb-[60px] max-h-[100vh] overflow-y-auto"}>
        <h1 className={"font-black text-5xl text-black"}>
            {title}
        </h1>

        <form action={action} className={"flex flex-col gap-y-4 mt-20"}>
            {
                questions.map((q) => (
                    <DisplayQuestion key={q.id} question={q}/>
                ))
            }
            <input name={"formid"} defaultValue={formId} className={"hidden"} />
            <CustomButton pending={pending} type={"submit"} title={"Submit"} cn={"w-12 bg-black text-white font-semibold hover:bg-gray-900 hover:text-white pl-2 pr-2 mt-6"} />
        </form>

        <Link href={"/"} className={"absolute bottom-6 right-6 text-black rounded border border-gray-5 text-xs hover:border hover:border-gray-6 p-1"}>Made with tally</Link>
    </div>
}

export default DisplayForm