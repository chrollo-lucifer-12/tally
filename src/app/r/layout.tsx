import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import {getCurrentSession} from "@/lib/cookie";
import {redirect} from "next/navigation";
import BreadCrumb from "@/components/breadcrumb";
import MobileLinks from "@/components/mobile-links";
import IconDropdown from "@/components/icon-dropdown";

const Layout = async ({ children }: { children: ReactNode }) => {


    const {user} = await getCurrentSession();

    if (!user) {
        return redirect("/")
    }

    return (
        <main className="min-h-screen bg-white" suppressHydrationWarning>
           {children}
        </main>
    );
};

export default Layout;
