"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PageContent = ({}) => {
    return(
        <div className="flex flex-col justify-between w-full rounded-lg bg-neutral-800">

            <Header className="rounded-lg bg-gradient-to-b from-pink-700">Web Gallery</Header>

            <Footer>Footer</Footer>

        </div>
    );
}

export default PageContent;