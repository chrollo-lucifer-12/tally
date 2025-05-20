"use client"

import {InboxIcon} from "lucide-react";

interface SubmissionsTableProps {
    reviews :  {
        questionName: string
        response: string
    }[]
}

const SubmissionsTable = ({reviews} : SubmissionsTableProps) => {
    if (!reviews.length) {
        return <div className={"w-full h-full items-center justify-center flex flex-col gap-y-2"}>
            <InboxIcon className={"w-16 h-16 text-gray-6"} />
            <p className={"text-black font-semibold text-md"}>No completed submissions yet</p>
            <p className={"text-gray-9 text-xs"}>Your form is published and ready to be shared with the world!</p>
        </div>
    }


    return <div className={"w-full h-full pt-2 pb-2"}>
        <table className="table-auto border-collapse w-full text-left">
            <thead>
            <tr>
                {reviews.map((r, index) => (
                    <th key={index} className="border-b border-r border-gray-4 p-1 text-xs font-semibold text-gray-7">
                        {r.questionName}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr>
                {reviews.map((r, index) => (
                    <td key={index} className="border-b border-r border-gray-4 p-1 text-xs text-gray-8">
                        {r.response}
                    </td>
                ))}
            </tr>
            </tbody>
        </table>
    </div>
}

export default SubmissionsTable