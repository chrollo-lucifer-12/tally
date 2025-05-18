"use client"

import { createReactBlockSpec } from "@blocknote/react";
import { defaultProps } from "@blocknote/core";

export const ShortQuestionBlock = createReactBlockSpec(
    {
        type: "shortquestion",
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
                    <p

                        className="text-md font-semibold"
                        ref={props.contentRef}
                        data-placeholder={props.block.props.placeholder}
                        style={{
                            position: "relative",
                        }}
                    >

                    </p>

                    <div className="mt-2">
                        <input
                            disabled
                            type="text"
                            className="w-[40%] px-3 py-2 border border-gray-300 text-xs rounded-lg focus:outline-none hover:shadow-md"
                        />
                    </div>
                </div>
            );
        },
    }
);