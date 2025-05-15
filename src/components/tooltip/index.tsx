"use client"

import {ReactNode} from "react";

interface TooltipProps {
    children : ReactNode
    cn : string
}

const Tooltip = ({ children, cn }: TooltipProps) => {
    return (
        <div className={`bg-black text-white font-semibold text-[8px] rounded p-1 pl-2 pr-2 absolute z-10 whitespace-nowrap ${cn}`}>
            {children}
        </div>
    );
};

export default Tooltip