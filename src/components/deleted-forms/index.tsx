"use client"

import {CircleEllipsisIcon} from "lucide-react";

interface DeletedFormsProps {
    forms: { id: string, title: string }[]
    onClose: () => void
}

const DeletedForms = ({ forms, onClose }: DeletedFormsProps) => {

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleBackdropClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-[500px] h-fit bg-white rounded-lg shadow-lg p-4 transition duration-200">
                <div className="flex flex-col gap-y-1">
                    {forms.map((form) => (
                        <div key={form.id} className="flex items-center gap-x-4 p-1 text-gray-700 text-xs">
                            <CircleEllipsisIcon className={"w-4 h-4 text-gray-6"} />
                            {form.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DeletedForms
