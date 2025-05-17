"use client"

import ReviewCard from "@/components/home/review-card";

import {
    SquareStack,
    Table,
    Database,
    Network,
    MessageSquare,
    FileText,
    BarChart3,
    Signal,
    Zap,
    Workflow,
    Share2,
    MoreHorizontal
} from "lucide-react";
import FeatureCard from "@/components/home/feature-card";
import Image from "next/image";

const features = [
    {
        icon: SquareStack,
        title: "Notion.",
        content: "Send submissions to Notion."
    },
    {
        icon: Table,
        title: "Google Sheets.",
        content: "Send submissions to a sheet."
    },
    {
        icon: Database,
        title: "Airtable.",
        content: "Send submissions to Airtable."
    },
    {
        icon: Network,
        title: "Webhooks.",
        content: "Send events for new submissions to HTTP endpoints."
    },
    {
        icon: MessageSquare,
        title: "Slack.",
        content: "Send Slack messages for new submissions."
    },
    {
        icon: FileText,
        title: "Coda.",
        content: "Send submissions to Coda."
    },
    {
        icon: BarChart3,
        title: "Google Analytics.",
        content: "Analyze traffic sources, visitor behavior and time spent."
    },
    {
        icon: Signal,
        title: "Meta Pixel.",
        content: "Measure and optimize your ad campaigns."
    },
    {
        icon: Zap,
        title: "Zapier.",
        content: "Send submissions to your favorite tools."
    },
    {
        icon: Workflow,
        title: "Make.",
        content: "Send submissions to your favorite tools."
    },
    {
        icon: Share2,
        title: "Pipedream.",
        content: "Send submissions to your favorite tools."
    },
    {
        icon: MoreHorizontal,
        title: "And many more.",
        content: "Integrate with thousands of tools using Zapier, Make or Pipedream."
    }
];


const Feature5 = () => {
    return <section className="mt-32 flex flex-col items-center  gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
        <div className={"sm:w-[600px] md:w-[700px] w-[300px] flex justify-between items-center"}>
            <div>
                <h1 className="text-black font-extrabold sm:text-3xl text-lg">
                    Connect your favorite tools
                </h1>
                <p className="mt-2 text-gray-700 text-[16px] max-w-[350px]">
                    Save time using popular integrations to sync your form submissions.
                </p>
            </div>
            <Image src={"/paper-plane.png"} alt={"smart"} width={250} height={250} className={"hidden sm:block"}/>
        </div>

        <div className={"sm:w-[600px] md:w-[700px] w-[300px] grid sm:grid-cols-3"}>
            {
                features.map((feature, i) => (
                    <FeatureCard key={i} icon={feature.icon} title={feature.title} content={feature.content}/>
                ))
            }
        </div>
        <ReviewCard review={`“Can attest that Tally >>> Typeform hands down”`} name={"Steven Tey"}
                    designation={"Founder Dub.co, previously at Vercel"}/>
    </section>
}

export default Feature5