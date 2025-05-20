"use client"

interface DisplayReviewProps {
    questionName : string
    response : string
}

const DisplayReview = ({questionName, response} : DisplayReviewProps) => {
    return <div className={"flex flex-col gap-y-6"}>
        <p className={"text-black text-md font-bold"}>{questionName}</p>
        <p className={"text-gray-8 text-sm"}>{response}</p>
    </div>
}

export default DisplayReview