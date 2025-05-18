// @ts-nocheck
"use client"

import { createReactBlockSpec } from "@blocknote/react";
import { defaultProps } from "@blocknote/core";


export const MCQBlock = createReactBlockSpec({
    type : "mcq",
    propSchema : {
        textAlignment: defaultProps.textAlignment,
        textColor: defaultProps.textColor,
        placeholder : {
            default : "Type your question here"
        },
        options : {
            default : ["Option 1", "Option 2", "Option 3", "Option 4"]
        },
        correctOptions : {
            default : 0
        }
    },
    content : "inline"
}, {
    render : (props) => {
        const [options, setOptions] = useState(props.block.props.options || ["Option 1", "Option 2", "Option 3", "Option 4"]);

        return (
            <div className="flex flex-col gap-y-2 p-2">
                <p
                    className="text-md font-semibold"
                    ref={props.contentRef}
                    data-placeholder={props.block.props.placeholder}
                    style={{
                        position: "relative",
                    }}
                >
                </p>
            </div>
        )
    }
})

