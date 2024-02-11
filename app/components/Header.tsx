"use client"


import Button from "@/components/Button"
import Box from "@/components/Box"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className,
}) => {
    const router = useRouter();

    return(
        <div className={twMerge(`h-fit bg-gradient-to-b from-purple-700 p-4`, className )}>
            <div className="flex items-center justify-between px-4">
                <p className="text-xl hover:[text-shadow:_0_10px_10px_#454545] transition-all h-fit ">
                    Logo
                </p>

                <div className="flex p-2 gap-x-4">
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                    <Button>Button 3</Button>
                </div>

                {
                    //<Hamburger></Hamburger>
                }
            </div>
        </div>
    );
}

export default Header;