"use client"

import {createReactBlockSpec} from "@blocknote/react";
import {defaultProps} from "@blocknote/core";

export const QuestinBlock = createReactBlockSpec(
    {
        type: "question",
        propSchema: {
            textAlignment: defaultProps.textAlignment,
            textColor: defaultProps.textColor,
            value : {
                default : ""
            }
        },
        content: "inline",
    },
    {
        render: (props) => {
            const {block, editor} = props

            return (
                <div className={`flex items-center gap-x-2 ${block.props.textColor} ${block.props.textAlignment}`}>
                    <p className={"text-gray-10 font-bold text-[20px]"}>Q</p>
                <p
                    className={`w-full px-3 py-2 text-md font-semibold underline text-[15px]`}
                    ref={props.contentRef}
                />
                </div>
            );
        },
    }
);