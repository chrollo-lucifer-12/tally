"use client"
import { Prisma } from "@prisma/client";
import {InboxIcon} from "lucide-react";
import DisplayReview from "@/components/display-summary/display-review";

interface DisplaySummaryProps {
    reviews :  ({
        question: {
            title: string
            type: string
        }
    } & {
        id: string
        userId: string
        formId: string
        questionId: string
        response: Prisma.JsonValue
    })[]
}

const DisplaySummary = ({reviews} : DisplaySummaryProps) => {

    if (!reviews.length) {
        return <div className={"w-full h-full items-center justify-center flex flex-col gap-y-2"}>
            <InboxIcon className={"w-16 h-16 text-gray-6"} />
            <p className={"text-black font-semibold text-md"}>No completed submissions yet</p>
            <p className={"text-gray-9 text-xs"}>Your form is published and ready to be shared with the world!</p>
        </div>
    }

    return <div className={"w-full h-full pt-6 pb-6 flex flex-col gap-y-2 max-h-[60vh] overflow-y-auto"}>
        {
            reviews.map((review) => (
                <DisplayReview key={review.id} questionName={review.question.title || review.question.type} response={JSON.stringify(review.response)}/>
            ))
        }
    </div>
}

export default DisplaySummary