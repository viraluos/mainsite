"use client"

import { twMerge } from "tailwind-merge";

interface FooterProps {
    children?: React.ReactNode;
    className?: string;
}

const Footer: React.FC<FooterProps> = ({
    children,
    className
}) => {
    return(
        <div className={twMerge( `w-full p-6 bg-neutral-900`, className)}>
            {children}
        </div>
    );
}

export default Footer;