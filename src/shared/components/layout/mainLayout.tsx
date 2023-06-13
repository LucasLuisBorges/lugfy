'use client';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { House, MagnifyingGlass, Book, List } from 'phosphor-react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { LanguageButton, ArrowButton, MenuIconItem, LanguageModal } from '../index';

interface IProps {
  children: ReactNode;
}

const MainLayoutComponent = ({ children }: IProps) => {
  const [sizes, setSizes] = useState([15, 85]);
  const [languageModal, setLanguageModal] = useState(false);

  const sashRender = () => <div className="cursor-col-resize" />;
  const isBigScreen = useMediaQuery({ minWidth: 1024 });

  const toggleModal = () => {
    setLanguageModal(!languageModal);
  };
  return isBigScreen ? (
    <section className="flex flex-col min-h-screen">
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes} sashRender={sashRender}>
        <Pane minSize={180} maxSize="30%" className="flex">
          <section className="sticky flex flex-col w-full h-screen max-h-screen bg-[#030303] text-white">
            <Link href="/">
              <Image src="/logo.png" className="m-6 cursor-pointer" alt="Logo" width={131} height={40} />
            </Link>
            <nav className="flex flex-col h-full justify-between items-center">
              <div className="flex w-full flex-col gap-1">
                <MenuIconItem label="Início" href="/" icon={<House size={28} />} />
                <MenuIconItem label="Buscar" href="/" icon={<MagnifyingGlass size={28} />} />
                <MenuIconItem label="Sua Biblioteca" href="/" icon={<Book size={28} />} />
              </div>
              <div className="mb-8">
                <LanguageButton label="Português do Brasil" onClick={toggleModal} />
              </div>
            </nav>
          </section>
        </Pane>
        <Pane>
          <section className="relative flex-1 min-h-screen bg-gradient-to-br from-[#1f1f1f] to-[#1f1e1e]">
            <div className="sticky flex top-0 left-0 w-full px-8 bg-[#121212] h-16 items-center justify-between">
              <Link href="/" className="flex lg:hidden">
                <Image src="/logo.png" className="m-6 cursor-pointer" alt="Logo" width={131} height={40} />
              </Link>
              <div className="flex gap-2">
                <ArrowButton variant="left" />
                <ArrowButton variant="right" />
              </div>
              <div className="flex gap-8 items-center">
                <span className="text-white/60 hover:text-white cursor-pointer hover:scale-105 transition duration-300">Inscrever-se</span>
                <button className="px-8 py-2 rounded-full bg-white text-base text-black font-semibold hover:scale-105 transition duration-300">
                  Entrar
                </button>
              </div>
            </div>
            <div className="flex-1 max-h-screen overflow-y-auto">
              <section className="py-5 px-9">{children}</section>
            </div>
          </section>
        </Pane>
      </SplitPane>
      <LanguageModal isVisible={languageModal} setIsVisible={setLanguageModal} />
    </section>
  ) : (
    <section className="relative flex-1 min-h-screen bg-gradient-to-br from-[#1f1f1f] to-[#1f1e1e]">
      <div className="sticky z-[100] flex top-0 left-0 w-full px-8 bg-[#121212] h-16 items-center justify-between">
        <Link href="/" className="flex">
          <Image src="/logo.png" className="m-6 cursor-pointer" alt="Logo" width={131} height={40} />
        </Link>
        <div className="flex gap-6">
          <MagnifyingGlass size={28} className="text-white hover:scale-105 transition duration-300" />
          <List size={28} className="text-white hover:scale-105 transition duration-300" />
        </div>
      </div>
      <section className="py-5 px-9">{children}</section>
    </section>
  );
};

export const MainLayout = dynamic(() => Promise.resolve(MainLayoutComponent), { ssr: false });
