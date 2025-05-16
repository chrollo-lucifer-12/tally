// @ts-nocheck

"use client"

import {
    DefaultReactSuggestionItem, getDefaultReactSlashMenuItems,
    SuggestionMenuController,
    useCreateBlockNote
} from "@blocknote/react";
import {
    BlockNoteEditor,
    BlockNoteSchema, defaultBlockSpecs,
    filterSuggestionItems,
    insertOrUpdateBlock
} from "@blocknote/core";
import {BlockNoteView} from "@blocknote/mantine";

import {InputBlock} from "@/components/text-editor/input-block";
import {TextAreaBlock} from "@/components/text-editor/textarea-block";
import {QuestinBlock} from "@/components/text-editor/question-block";
import {updateForm} from "@/app/(main)/actions";

const inputItem = (editor : BlockNoteEditor) => ({
    title : "Insert Input field",
    onItemClick: () =>
        insertOrUpdateBlock(editor, {
            type: "input",
        }),
    subtext: "Used to insert a block with input",
})

const textareaItem = (editor : BlockNoteEditor) => ({
    title : "Insert Text Area",
    onItemClick : () =>
        insertOrUpdateBlock(editor, {
            type : "textarea"
        }),
    subtext: "Used to insert a block with text area",
})

const questionItem = (editor : BlockNoteEditor) => ({
    title : "Insert Question ",
    onItemClick : () =>
        insertOrUpdateBlock(editor, {
            type : "question"
        }),
    subtext: "Used to insert a question",
})

const getCustomSlashMenuItems = (
    editor: BlockNoteEditor
): DefaultReactSuggestionItem[] => [
    ...getDefaultReactSlashMenuItems(editor),
    inputItem(editor),
    textareaItem(editor),
    questionItem(editor)
];


const schema = BlockNoteSchema.create({
    blockSpecs: {
        ...defaultBlockSpecs,
        input : InputBlock,
        textarea : TextAreaBlock,
        question : QuestinBlock
    },
});

const Editor = ({content, formId } : {content : any | null, formId : string}) => {

    const editor = useCreateBlockNote(
        {
            schema,
            initialContent : content || [
                {
                    type : "heading",
                    content : "Form Title"
                },
                {
                    type: "paragraph",
                    content: "Type /q to insert a question followed by input fields.",

                    props : {
                        textColor : "red"
                    }
                }
            ]
        },
    );

    return <BlockNoteView editor={editor} theme={"light"} slashMenu={false}>

        <button onClick={ async () => {
           await updateForm(formId, editor.document)
        }}></button>

        <SuggestionMenuController triggerCharacter={"/"} getItems={async (query) =>
            filterSuggestionItems(getCustomSlashMenuItems(editor), query)
        } />
    </BlockNoteView>
}

export default Editor