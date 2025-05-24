"use client"

import AddPage from "@/components/integrations/add-page";
import CustomButton from "@/components/custom-button";

const AddSheets = ({formId} : {formId : string}) => {
    return <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col gap-y-6 items-center justify-center">
        <AddPage src={"/icon_GOOGLE_SHEETS.png"} title={"Connect with Google Sheets"} description={"Send your Tally form responses straight to Google Sheets.\n" +
            "Learn about Google Sheets integration."} />
        <CustomButton title={"Connect to Notion"} cn={"bg-blue-500 hover:blue-500 text-white font-semibold hover:text-white"} onClick={() => {
            const state = encodeURIComponent(JSON.stringify({ formId }));
            const notionAuthUrl = `https://api.notion.com/v1/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_NOTION_CLIENT_ID}&response_type=code&owner=user&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}/login/notion/callback&state=${state}`;
            window.location.href = notionAuthUrl;
        }} />
    </div>
}

export default AddSheets