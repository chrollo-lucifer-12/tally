"use client"

import CustomInput from "@/components/custom-input";

interface DisplayQuestionProps {
    question :  {
        formId: string
        id: string
        title: string
        type: string
    }
}

const DisplayQuestion = ({question} : DisplayQuestionProps) => {
    return <div className={"text-gray-8 flex flex-col gap-y-2"}>
        <p className={"text-lg font-bold italic"}>{question.title || question.type.toUpperCase()}</p>
        {
            question.type === "longquestion" ? (<textarea name={question.id} className={`border border-gray-300 font-light h-[50px] w-[400px] text-[14px] rounded-lg text-black px-3 py-1
                           focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300
                           hover:shadow-sm transition duration-200 `} />) : (<CustomInput name={question.id} type={question.type} cn={"w-[250px]"} />)
        }
    </div>
}

export default DisplayQuestion