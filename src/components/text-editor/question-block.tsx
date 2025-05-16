"use client"

import {createReactBlockSpec} from "@blocknote/react";
import {defaultProps} from "@blocknote/core";
import { MessageCircleQuestionIcon} from "lucide-react";

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
                    <MessageCircleQuestionIcon className={"w-4 h-4"} />
                <p
                    className={`w-full text-lg font-semibold text-[15px]`}
                    ref={props.contentRef}
                />
                </div>
            );
        },
    }
);