"use client"

import CustomButton from "@/components/custom-button";

const GoogleLogin = () => {
    return  <section className={"flex flex-col gap-y-4 mt-10"}>
        <CustomButton href={"/login/google"} src={"/google-svg.svg"} title={"Continue with Google"}/>
    </section>
}
export default GoogleLogin