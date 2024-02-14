"use client"

import Sidebar from "./Sidebar";
import PageContent from "./PageContent";

import { usePathname } from "next/navigation";
import React from "react";

import { twMerge } from "tailwind-merge";

interface Content{
    className?: string;
}

const Content: React.FC<Content> = ({
    className,
}) => {
    const pathname = usePathname();
    
    return(
        <div className={twMerge(`flex h-full gap-2 p-2`, className)}>

            <Sidebar></Sidebar>

            <PageContent>{pathname}</PageContent>

        </div>
    );
}

export default Content;