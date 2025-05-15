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
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import {InputBlock} from "@/components/text-editor/input-block";
import {TextAreaBlock} from "@/components/text-editor/textarea-block";
import {QuestinBlock} from "@/components/text-editor/question-block";



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

const TextEditor = () => {

    const editor = useCreateBlockNote(
        {
            schema,
        },
    );

    return <BlockNoteView editor={editor} theme={"light"}  onChange={(e) => {

    }} slashMenu={false}>
        <SuggestionMenuController triggerCharacter={"/"} getItems={async (query) =>
            filterSuggestionItems(getCustomSlashMenuItems(editor), query)
        } />
    </BlockNoteView>
}

export default TextEditor