"use client"

import { createReactBlockSpec } from "@blocknote/react";
import { defaultProps } from "@blocknote/core";
import {Mail} from "lucide-react";

export const EmailBlock = createReactBlockSpec(
    {
        type: "email",
        propSchema: {
            textAlignment: defaultProps.textAlignment,
            textColor: defaultProps.textColor,
            placeholder: {
                default: "Type your question here"
            }
        },
        content: "inline",
    },
    {
        render: (props) => {
            return (
                <div className="flex flex-col gap-y-2">
                    <div className="relative w-[40%]">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            disabled
                            placeholder="Email"
                            type="tel"
                            className="w-full pl-9 pr-3 py-2 border border-gray-300 text-xs rounded-lg focus:outline-none hover:shadow-md"
                        />
                    </div>
                </div>
            );
        },
    }
);