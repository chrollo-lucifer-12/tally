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
import {ContactNumberBlock} from "@/components/text-editor/contactnumberblock";
import {EmailBlock} from "@/components/text-editor/emailBlock";
import {UrlBlock} from "@/components/text-editor/urlblock";
import {Contact, Mail, SquareSlash, Link, SquareSlashIcon, ContactIcon, MailIcon, LinkIcon} from "lucide-react";

const shortQuestionItem = (editor: BlockNoteEditor) => ({
    title: "Short answer question",
    onItemClick: () =>
        insertOrUpdateBlock(editor, {
            type: "shortquestion",
        }),
    icon : <SquareSlashIcon/>
});

const longQuestionItem = (editor: BlockNoteEditor) => ({
    title: "Long answer question",
    onItemClick: () =>
        insertOrUpdateBlock(editor, {
            type: "longquestion",
        }),
    icon : <SquareSlashIcon/>
});

const contactItem = (editor : BlockNoteEditor) => ({
    title : "Contact" ,
    onItemClick : () =>
        insertOrUpdateBlock(editor, {
            type : "contact"
        }),
    iocn : <ContactIcon/>
})

const emailItem = (editor : BlockNoteEditor) => ({
    title : "Email",
    onItemClick : () =>
        insertOrUpdateBlock(editor, {
            type : "email"
        }),
    icon : <MailIcon/>
})

const urlIem = (editor : BlockNoteEditor) => ({
    title : "Url",
    onItemClick : () =>
        insertOrUpdateBlock(editor, {
            type : "url"
        }),
    icon : <LinkIcon/>
})

const getCustomSlashMenuItems = (
    editor: BlockNoteEditor
): DefaultReactSuggestionItem[] => [
    shortQuestionItem(editor),
    longQuestionItem(editor),
    contactItem(editor),
    emailItem(editor),
    urlIem(editor)
];


const schema = BlockNoteSchema.create({
    blockSpecs: {
        ...defaultBlockSpecs,
        shortquestion: ShortQuestionBlock,
        longquestion : LongQuestionBlock,
        contact : ContactNumberBlock,
        email : EmailBlock,
        url : UrlBlock
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