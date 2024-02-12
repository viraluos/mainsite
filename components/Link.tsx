import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface LinksProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const Links: React.FC<LinksProps> = ({
  icon: Icon,
  label,
  active,
  href
}) => {
  return ( 
    <Link
      href={href} 
      className={twMerge(` flex flex-row h-auto items-center w-fit gap-x-2 text-sm md:text-lg font-bold cursor-pointer hover:text-white transition text-neutral-500 py-1`,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-fit">{label}</p>
    </Link>
   );
}

export default Links;