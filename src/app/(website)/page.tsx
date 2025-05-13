import Navbar from "@/components/home/navbar";
import HeroBanner from "@/components/home/hero-banner";
import TutorialVideo from "@/components/home/tutorial-video";
import Feature1 from "@/components/home/feature-1";
import Feature2 from "@/components/home/feature-2";
import Feature3 from "@/components/home/feature-3";
import Feature4 from "@/components/home/feature-4";
import Feature5 from "@/components/home/feature-5/page";
import Feature6 from "@/components/home/feature-6";
import QnaSection from "@/components/home/qna-section";

const Page = () => {
    return <div>
        <Navbar/>
        <HeroBanner/>
        <TutorialVideo/>
        <Feature1/>
        <Feature2/>
        <Feature3/>
        <Feature4/>
        <Feature5/>
        <Feature6/>
        <QnaSection/>
    </div>
}

export default Page