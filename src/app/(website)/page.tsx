import Navbar from "@/components/home/navbar";
import HeroBanner from "@/components/home/hero-banner";
import TutorialVideo from "@/components/home/tutorial-video";
import Feature1 from "@/components/home/feature-1";
import Feature2 from "@/components/home/feature-2";
import Feature3 from "@/components/home/feature-3";

const Page = () => {
    return <div>
        <Navbar/>
        <HeroBanner/>
        <TutorialVideo/>
        <Feature1/>
        <Feature2/>
        <Feature3/>
    </div>
}

export default Page