"use client"

import {createReactBlockSpec} from "@blocknote/react";
import {defaultProps} from "@blocknote/core";

export const InputBlock = createReactBlockSpec(
    {
        type: "input",
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
            return (
                <input
                    className={` w-[200px] px-3 py-2 border border-gray-300 text-xs rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    value={props.block.content.map(content => content.text)}
                    ref={props.contentRef}
                    onChange={(e) => {
                        props.editor.updateBlock(props.block, {
                            content : e.target.value
                        })
                    }}
                />
            );
        },
    }
);