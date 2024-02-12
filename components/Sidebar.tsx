"use client"

import { HiHome, HiMusicNote } from "react-icons/hi";
import { IoMdImages } from "react-icons/io";
import { CiServer, CiFileOn } from "react-icons/ci";
import { GiSnake } from "react-icons/gi";
import { MdSubtitles } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";

// import Button from "@/components/Button";
import Links from "./Link";
import Box from "./Box";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

// import - from -

const Sidebar = ({}) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        { icon: HiHome, label: 'Home', active: pathname === '/', href: '/' }, // home route

        { icon: CiFileOn, label: 'File manager', active: pathname === '/files', href: '/files' }, // File manager route

        { icon: IoMdImages, label: 'Image gallery', active: pathname === '/gallery', href: '/gallery' }, // gallery route

        { icon: HiMusicNote, label: 'Musxfy', active: pathname === '/musxfy', href: '/musxfy' }, // musxfy route

        { icon: GiSnake, label: 'Snake', active: pathname === '/snake', href: '/snake' }, // snake game route

        { icon: CiServer, label: 'Server Side Rendering', active: pathname === '/ssr', href: '/ssr' }, // ssr route

        { icon: MdSubtitles, label: 'Subtitles', active: pathname === '/subtitles', href: '/subtitles' }, // Subtitles route

        { icon: LuListTodo, label: 'Todo list', active: pathname === '/todo', href: '/todo' }, // Todo list route
    ], [pathname]);

    return(
        <div className="hidden md:block w-[550px]">
            <Box className="mb-2">
                <div className="flex flex-col px-5 py-4 gap-y-4">
                    {routes.map((item) => (
                        <Links key={item.label} {...item} />
                    ))}
                </div>
            </Box>

        {
            <div className="w-fit md:w-full">
                <Box className="p-4">
                    <div className="mb-4 text-xl">
                        Testo importante i dont believe you.
                    </div>
                    <div className="mb-4">
                        Just setting up this site waow.
                    </div>
                    <div>
                        Another silly text.
                    </div>
                </Box>
            </div>
        }
        </div>

    );
}

export default Sidebar;