"use client"

import Button from "./Button"
import Box from "./Box"

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
        <div className={twMerge(`h-fit p-6`, className )}>
            <div className="flex items-center justify-between">
                <p className="text-3xl transition-all hover:[text-shadow:_0_5px_5px_#045f32] h-fit ">
                    {children}
                </p>

                <div className="flex gap-x-4">
                    <Button>About</Button>
                    <Button>Contact</Button>
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