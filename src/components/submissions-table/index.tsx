"use client"

import {InboxIcon} from "lucide-react";
import CustomButton from "@/components/custom-button";

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

    const handleDownloadCSV = () => {
        const csvData = reviews.map((row) =>
            Object.values(row).map((value) => `"${value}"`).join(',')
        );
        const csvHeader = Object.keys(reviews[0]).map((key) => `"${key}"`).join(',');
        const csvString = [csvHeader, ...csvData].join('\n');

        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'my_data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    return <div className={"w-full h-full pt-2 pb-2"}>
        <CustomButton onClick={handleDownloadCSV} title={"Download CSV"} cn={"border-none p-1 text-xs"} />
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