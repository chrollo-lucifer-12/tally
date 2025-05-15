"use client"

import {createReactBlockSpec} from "@blocknote/react";
import {defaultProps} from "@blocknote/core";

export const TextAreaBlock = createReactBlockSpec(
    {
        type: "textarea",
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
                <textarea
                    className={`max-h-[300px] h-300px w-[400px] overflow-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs ${block.props.textColor} ${block.props.textAlignment}`}
                    ref={props.contentRef}
                    value={props.block.content.map(content => content.text)}
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