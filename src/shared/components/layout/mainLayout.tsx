'use client';
import Image from 'next/image';
import { ReactNode } from 'react';
import { ArrowButton } from '../arrowButton';
import { MenuIconItem } from '../menuIconItem';
import { House, MagnifyingGlass, Book, List } from 'phosphor-react';
import Link from 'next/link';

interface IProps {
  children: ReactNode;
}

export function MainLayout({ children }: IProps) {
  return (
    <section className="flex h-screen">
      <section className="hidden flex-col max-h-screen bg-[#030303] text-white w-56 lg:flex">
        <Link href="/">
          <Image src="/logo.png" className="m-6 cursor-pointer" alt="Logo" width={131} height={40} />
        </Link>
        <nav className="flex flex-col gap-1">
          <MenuIconItem label="Início" href="/" icon={<House size={28} />} />
          <MenuIconItem label="Buscar" href="/" icon={<MagnifyingGlass size={28} />} />
          <MenuIconItem label="Sua Biblioteca" href="/" icon={<Book size={28} />} />
        </nav>
      </section>
      <section className="relative flex-1 bg-gradient-to-br from-[#1f1f1f] to-[#1f1e1e]">
        <div className="sticky flex top-0 left-0 w-full px-8 bg-[#121212] h-16 items-center justify-between">
          <Link href="/" className="flex lg:hidden">
            <Image src="/logo.png" className="m-6 cursor-pointer" alt="Logo" width={131} height={40} />
          </Link>
          <div className="hidden lg:flex gap-2">
            <ArrowButton variant="left" />
            <ArrowButton variant="right" />
          </div>
          <div className="hidden lg:flex gap-8 items-center">
            <span className="text-white/60 hover:text-white cursor-pointer hover:scale-105 transition duration-300">Inscrever-se</span>
            <button className="px-8 py-2 rounded-full bg-white text-base text-black font-semibold hover:scale-105 transition duration-300">
              Entrar
            </button>
          </div>
          <div className="flex gap-6 lg:hidden">
            <MagnifyingGlass size={28} className="text-white hover:scale-105 transition duration-300" />
            <List size={28} className="text-white hover:scale-105 transition duration-300" />
          </div>
        </div>
        <section className="py-5 px-9">{children}</section>
      </section>
    </section>
  );
}
