"use client"

import {InboxIcon} from "lucide-react";
import CustomButton from "@/components/custom-button";

interface SubmissionsTableProps {
    reviews :  Map<string, string[]>
}

const SubmissionsTable = ({reviews} : SubmissionsTableProps) => {
    const questions = Array.from(reviews.keys());
    const numRows = Math.max(...Array.from(reviews.values()).map(responses => responses.length));

    if (questions.length === 0 || numRows === 0) {
        return (
            <div className="w-full h-full items-center justify-center flex flex-col gap-y-2">
                <InboxIcon className="w-16 h-16 text-gray-6" />
                <p className="text-black font-semibold text-md">No completed submissions yet</p>
                <p className="text-gray-9 text-xs">Your form is published and ready to be shared with the world!</p>
            </div>
        );
    }

    const handleDownloadCSV = () => {
        const headers = questions;
        const rows = [];

        for (let i = 0; i < numRows; i++) {
            const row = questions.map((q) => {
                const responses = reviews.get(q) || [];
                return `"${responses[i] ?? ""}"`;
            });
            rows.push(row.join(","));
        }

        const csvString = [headers.map(h => `"${h}"`).join(","), ...rows].join("\n");
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'submissions.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-full h-full pt-2 pb-2">
            <CustomButton onClick={handleDownloadCSV} title="Download CSV" cn="border-none p-1 text-xs" />
            <table className="table-auto border-collapse w-full text-left">
                <thead>
                <tr>
                    {questions.map((question, index) => (
                        <th key={index} className="border-b border-r border-gray-4 p-1 text-xs font-semibold text-gray-7">
                            {question}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {Array.from({ length: numRows }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {questions.map((question, colIndex) => (
                            <td key={colIndex} className="border-b border-r border-gray-4 p-1 text-xs text-gray-8">
                                {reviews.get(question)?.[rowIndex] || ""}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default SubmissionsTable