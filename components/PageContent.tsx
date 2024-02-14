"use client"

import Header from "./Header";
import Footer from "./Footer";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface PageProps {
    children?: React.ReactNode;
}

const PageContent: React.FC<PageProps> = ({
    children,
}) => {
    const pathname = usePathname();
    
    const gradients = useMemo(() => [
        { label: 'Home', pathname: '/', gradient: 'from-purple-700' }, // home

        { label: 'File manager', pathname: '/files', gradient: 'from-green-400' }, // File manager

        { label: 'Image gallery', pathname: '/gallery', gradient: 'from-blue-700' }, // gallery

        { label: 'Musxfy', pathname: '/musxfy', gradient: 'from-indigo-300' }, // musxfy

        { label: 'Snake', pathname: '/snake', gradient: 'from-yellow-400' }, // snake game

        { label: 'Server side rendering', pathname: '/ssr', gradient: 'from-orange-700' }, // ssr

        { label: 'Subtitles', pathname: '/subtitles', gradient: 'from-green-800' }, // Subtitles

        { label: 'Todo list', pathname: '/todo', gradient: 'from-pink-800' }, // Todo list
    ], [pathname]);

    return(
        <div className="flex flex-col justify-between w-full rounded-lg bg-neutral-800">

            <Header className={`rounded-lg bg-gradient-to-b 
                    ${gradients.find(gradient => gradient.pathname === pathname)?.gradient}`}>
                
                {gradients.find(gradient => gradient.pathname === pathname)?.label}
            
            </Header>

            <Footer>Footer</Footer>

        </div>
    );
}

export default PageContent;