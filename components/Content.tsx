"use client"

import Sidebar from "./Sidebar";
import PageContent from "./PageContent";

import { usePathname } from "next/navigation";

/*
interface NavbarProps{
    children: React.ReactNode;
}
*/

const Content = ({}) => {
    const pathname = usePathname();
    
    return(
        <div className="flex h-full gap-2 p-2">

            <Sidebar></Sidebar>

            <PageContent>{pathname}</PageContent>

        </div>
    );
}

export default Content;