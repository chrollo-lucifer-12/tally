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
import {ShortQuestionBlock} from "@/components/text-editor/shortquestion-block";
import {LongQuestionBlock} from "@/components/text-editor/longquesstionblock";

const shortQuestionItem = (editor: BlockNoteEditor) => ({
    title: "Short answer question",
    onItemClick: () =>
        insertOrUpdateBlock(editor, {
            type: "shortquestion",
        }),
    subtext: "Used to insert a question",
});

const longQuestionItem = (editor: BlockNoteEditor) => ({
    title: "Long answer question",
    onItemClick: () =>
        insertOrUpdateBlock(editor, {
            type: "longquestion",
        }),
    subtext: "Used to insert a question",
});

const getCustomSlashMenuItems = (
    editor: BlockNoteEditor
): DefaultReactSuggestionItem[] => [
    shortQuestionItem(editor),
    longQuestionItem(editor)
];


const schema = BlockNoteSchema.create({
    blockSpecs: {
        ...defaultBlockSpecs,
        shortquestion: ShortQuestionBlock,
        longquestion : LongQuestionBlock
    },
});

const Editor = () => {

    const editor = useCreateBlockNote(
        {
            schema
        },
    );

    return <BlockNoteView editor={editor} theme={"light"} slashMenu={false} inputMode={"text"} onChange={(e) => {
        console.log(editor.document)
    }}>
        <SuggestionMenuController triggerCharacter={"/"} getItems={async (query) =>
            filterSuggestionItems(getCustomSlashMenuItems(editor), query)
        } />
    </BlockNoteView>
}

export default Editor