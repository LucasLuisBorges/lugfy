import Link from 'next/link';
import { LinkHTMLAttributes, ReactNode } from 'react';

interface IProps extends LinkHTMLAttributes<HTMLLinkElement> {
  label: string;
  icon: ReactNode;
  href: string;
}

export function MenuIconItem({ label, icon, href }: IProps) {
  return (
    <Link
      className="flex w-full pl-6 gap-3 text-white/70 hover:text-white items-center border-l-2 border-transparent hover:border-blue-500 py-1"
      href={href}
    >
      {icon}
      <span className="text-sm font-bold">{label}</span>
    </Link>
  );
}
