'use client';

import { ReactNode, useState } from 'react';
import { House, MagnifyingGlass, Book, List } from 'phosphor-react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { UserButton, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

import {
  LanguageButton,
  ArrowButton,
  MenuIconItem,
  LanguageModal,
  PlayerView,
  MobilePlayerView,
} from '../index';
import { Icons } from '../icons/icons';

interface IProps {
  children: ReactNode;
}

const MainLayoutComponent = ({ children }: IProps) => {
  const router = useRouter();
  const { userId } = useAuth();
  const isBigScreenForMenu = useMediaQuery({ minWidth: 1600 });
  const [sizes, setSizes] = useState([isBigScreenForMenu ? 15 : 25, 100]);
  const [languageModal, setLanguageModal] = useState(false);
  const isBigScreen = useMediaQuery({ minWidth: 1024 });
  const [menuOpen, setMenuOpen] = useState(false);

  function HandleModal() {
    setMenuOpen(!menuOpen);
  }

  const sashRender = () => <div className="cursor-col-resize" />;

  const toggleModal = () => {
    setLanguageModal(!languageModal);
  };
  return isBigScreen ? (
    <section className="relative flex flex-col min-h-screen">
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
        sashRender={sashRender}
      >
        <Pane minSize={230} maxSize="25%" className="flex">
          <section className="sticky flex flex-col w-full h-[92vh] max-h-[92vh] bg-[#030303] text-white">
            <Link href="/" className="flex items-center">
              <Icons.logo className="fill-white h-14 w-14 m-6" />
              <span className="uppercase text-2xl font-light">Lugfy</span>
            </Link>
            <nav className="flex flex-col h-full justify-between items-center">
              <div className="flex w-full flex-col gap-1">
                <MenuIconItem
                  label="Início"
                  href="/"
                  icon={<House size={28} />}
                />
                <MenuIconItem
                  label="Buscar"
                  href="/"
                  icon={<MagnifyingGlass size={28} />}
                />
                <MenuIconItem
                  label="Sua Biblioteca"
                  href="/"
                  icon={<Book size={28} />}
                />
              </div>
              <div className="mb-8">
                <LanguageButton
                  label="Português do Brasil"
                  onClick={toggleModal}
                />
              </div>
            </nav>
          </section>
        </Pane>
        <Pane>
          <section className="relative flex-1 bg-gradient-to-br from-[#1f1f1f] to-[#1f1e1e]">
            <div className="sticky flex top-0 left-0 w-full px-8 bg-[#121212] h-16 items-center justify-between z-50">
              <div className="flex gap-2">
                <ArrowButton variant="left" onClick={() => router.back()} />
                <ArrowButton variant="right" onClick={() => router.forward()} />
              </div>
              {!userId && (
                <div className="flex gap-8 items-center">
                  <span
                    onClick={() => router.push('/sign-up')}
                    className="text-white/60 hover:text-white cursor-pointer hover:scale-105 transition duration-300"
                  >
                    Inscrever-se
                  </span>
                  <button
                    onClick={() => router.push('/sign-in')}
                    className="px-8 py-2 rounded-full bg-white text-base text-black font-semibold hover:scale-105 transition duration-300"
                  >
                    Entrar
                  </button>
                </div>
              )}
              {userId && <UserButton afterSignOutUrl="/" />}
            </div>
            <div className="flex-1 max-h-[92vh] overflow-y-auto">
              <section className="py-5 px-9">{children}</section>
            </div>
          </section>
        </Pane>
      </SplitPane>
      <PlayerView />
      <LanguageModal
        isVisible={languageModal}
        setIsVisible={setLanguageModal}
      />
    </section>
  ) : (
    <section className="relative flex-1 min-h-screen bg-gradient-to-tl from-[#1f1f1f] to-[#2e2e2e]">
      <div className="sticky z-[100] flex top-0 left-0 w-full px-8 bg-[#121212] h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Icons.logo className="fill-white h-10 w-10 m-6" />
          <span className="uppercase text-2xl font-light text-white">
            Lugfy
          </span>
        </Link>
        <div className="flex gap-6">
          <MagnifyingGlass
            size={28}
            className="text-white hover:scale-105 transition duration-300"
          />
          <List
            size={28}
            className="text-white hover:scale-105 transition duration-300 hover:cursor-pointer"
            onClick={HandleModal}
          />
        </div>
      </div>
      <section className="py-5 pl-9">{children}</section>
      {!isBigScreen && menuOpen && (
        <div className="absolute z-[100] top-0 left-0 w-screen h-screen bg-zinc-950/95">
          <div className="w-full flex justify-end">
            <span
              onClick={HandleModal}
              className="text-white mt-4 mr-8 text-3xl hover:cursor-pointer"
            >
              X
            </span>
          </div>
        </div>
      )}
      <MobilePlayerView />
    </section>
  );
};

export const MainLayout = dynamic(() => Promise.resolve(MainLayoutComponent), {
  ssr: false,
});
