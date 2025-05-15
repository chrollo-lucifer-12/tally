"use client"

import { ReactNode } from "react";
import {CircleXIcon} from "lucide-react";

interface CustomDialogProps {
    children?: ReactNode;
    title: string;
    description?: string;
    isOpen: boolean;
    setIsOpen: (res: boolean) => void;
}

const CustomDialog = ({ children, description, title, isOpen, setIsOpen }: CustomDialogProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition duration-200">
            <div className="bg-white p-1 rounded-lg shadow-lg w-[300px] flex flex-col ">
                <header className="m-1 flex justify-end">
                    <CircleXIcon className={"w-4 cursor-pointer text-gray-5"} onClick={() => {
                        setIsOpen(false)
                    }}/>
                </header>
                <h1 className={"text-black font-semibold text-lg ml-4 mr-4"}>
                    {title}
                </h1>
                <main className={"mt-6 ml-4 mr-4 mb-6"}>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default CustomDialog;
