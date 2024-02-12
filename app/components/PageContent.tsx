"use client"

import Header from "./Header";
import Footer from "./Footer";

const PageContent = ({}) => {
    return(
        <div className="flex flex-col justify-between w-full rounded-lg bg-neutral-800">

            <Header className="rounded-lg"></Header>

            <Footer>Footer</Footer>

        </div>
    );
}

export default PageContent;