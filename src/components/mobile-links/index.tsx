import LinksList from "@/components/sidebar/links-list";
import LogoutButton from "@/components/logout-button";

const MobileLinks = () => {
    return <div className={"h-[150px] w-[120px] border border-gray-4 bg-gray-5 rounded-md max-h-[150px] overflow-y-auto p-2 shadow-md m-1 flex flex-col gap-y-1"}>
        <LinksList/>
        <LogoutButton/>
    </div>
}

export default MobileLinks