"use client"

import {ReactNode, useRef} from "react";
import {CircleXIcon} from "lucide-react";

interface CustomDialogProps {
    children?: ReactNode;
    title: string;
    description?: string;
    isOpen: boolean;
    setIsOpen: (res: boolean) => void;
    width ?: string
}

const CustomDialog = ({ children, description, title, isOpen, setIsOpen, width="300px" }: CustomDialogProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    if (!isOpen) return null;

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    return (
        <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition duration-200"  onClick={handleClickOutside}>
            <div className={`bg-white p-1 rounded-lg shadow-lg flex flex-col`} style={{width}}>
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
