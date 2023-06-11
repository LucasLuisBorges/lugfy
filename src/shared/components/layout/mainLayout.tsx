import Image from 'next/image';
import { ReactNode } from 'react';
import { ArrowButton } from '../arrowButton';

interface IProps {
  children: ReactNode;
}

export function MainLayout({ children }: IProps) {
  return (
    <section className="flex h-screen">
      <nav className="flex flex-col max-h-screen bg-[#030303] text-white pr-9">
        <Image src="/logo.png" className="m-6" alt="Logo" width={131} height={40} />
      </nav>
      <section className="relative flex-1 bg-gradient-to-br from-[#1f1f1f] to-[#1f1e1e]">
        <div className="sticky flex top-0 left-0 w-full px-8 bg-[#121212] h-16 items-center justify-between">
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
        <section className="py-5 px-9">{children}</section>
      </section>
    </section>
  );
}
