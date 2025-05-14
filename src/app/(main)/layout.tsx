import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";

const Layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-screen bg-white flex">
            <Sidebar />
            <div className="flex-1">{children}</div>
        </main>
    );
};

export default Layout;
