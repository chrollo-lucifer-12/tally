"use client"
import TallyIcon from "@/components/tally-icon";

const FormHeader = ({signup} : {signup : boolean}) => {
    return <header className={"flex flex-col gap-y-10 justify-center"}>
        <TallyIcon href={"/"}/>
        <span>
            <p className={"text-black text-[20px] font-[700]"}>{signup ? "Create your Tally account" : "Welcome back"}</p>
            {
                signup && <p className={"text-gray-5 text-[12px] font-[600] mt-10px leading-[1.25]"}>Get started with the simplest way to create forms.</p>
            }
            </span>
    </header>
}
export default FormHeader