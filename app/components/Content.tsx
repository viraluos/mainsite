"use client"

import Sidebar from "./Sidebar";
import PageContent from "./PageContent";

/*
interface NavbarProps{
    children: React.ReactNode;
}
*/

const Content = ({}) => {
    return(
        <div className="flex h-full gap-2 p-2">

            <Sidebar></Sidebar>

            <PageContent></PageContent>

        </div>
    );
}

export default Content;