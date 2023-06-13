'use client';
import { AlbumCard, ArrowButton } from '@/shared/components';

export default function Home() {
  return (
    <div className="mb-20">
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl">Foco</h1>
          <div className="flex gap-2 items-center">
            <span className="text-white/60 text-sm cursor-pointer hover:underline underline-offset-2 mr-2">Ver todos</span>
            <ArrowButton variant="left" />
            <ArrowButton variant="right" />
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <section className="w-full p-2 h-[320px] gap-4 flex flex-col flex-wrap overflow-x-hidden">
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
          </section>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl">Foco</h1>
          <div className="flex gap-2 items-center">
            <span className="text-white/60 text-sm cursor-pointer hover:underline underline-offset-2 mr-2">Ver todos</span>
            <ArrowButton variant="left" />
            <ArrowButton variant="right" />
          </div>
        </div>
        <section className="w-full p-2 h-[320px] gap-4 flex flex-col flex-wrap overflow-x-hidden">
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </section>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl">Foco</h1>
          <div className="flex gap-2 items-center">
            <span className="text-white/60 text-sm cursor-pointer hover:underline underline-offset-2 mr-2">Ver todos</span>
            <ArrowButton variant="left" />
            <ArrowButton variant="right" />
          </div>
        </div>
        <section className="w-full p-2 h-[320px] gap-4 flex flex-col flex-wrap overflow-x-hidden">
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </section>
      </section>
    </div>
  );
}
