import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import {getCurrentSession} from "@/lib/cookie";
import {redirect} from "next/navigation";
import BreadCrumb from "@/components/breadcrumb";

const Layout = async ({ children }: { children: ReactNode }) => {


    const {user} = await getCurrentSession();

    if (!user) {
        return redirect("/")
    }

    return (
        <main className="min-h-screen bg-white flex overflow-y-hidden" suppressHydrationWarning>
            <Sidebar />
            <div className="flex-1"> <BreadCrumb/> {children}</div>
        </main>
    );
};

export default Layout;
