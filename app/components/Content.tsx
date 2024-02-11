"use client"

import Sidebar from "./Sidebar";
import PageContent from "./PageContent"

/*
interface NavbarProps{
    children: React.ReactNode;
}
*/

const Content = ({}) => {
    return(
        <div className="flex h-full gap-4 p-4">
            <Sidebar></Sidebar>

            <PageContent></PageContent>

            {
                // footer
            }

        </div>
    );
}

export default Content;