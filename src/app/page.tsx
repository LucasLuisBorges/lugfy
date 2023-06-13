'use client';
import { AlbumCard, ArrowButton } from '@/shared/components';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 mb-20">
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl">Foco</h1>
          <div className="flex gap-2 items-center pr-4 lg:pr-0">
            <span tabIndex={0} className="text-white/60 text-sm cursor-pointer hover:underline underline-offset-2 mr-2">
              Ver todos
            </span>
            <ArrowButton variant="left" />
            <ArrowButton variant="right" />
          </div>
        </div>
        <div className="w-full overflow-x-auto md:overflow-x-hidden">
          <section className="grid gap-4 grid-flow-col p-2 auto-rows-max">
            <AlbumCard title="Deep Focus" description="Playlist Peaceful piano to help you slow down, breathe, and relax." url="/album.jpg" />
            <AlbumCard title="Deep Focus" description="Playlist Peaceful piano to help you slow down, breathe, and relax." url="/album.jpg" />
            <AlbumCard title="Deep Focus" description="Playlist Peaceful piano to help you slow down, breathe, and relax." url="/album.jpg" />
            <AlbumCard title="Deep Focus" description="Playlist Peaceful piano to help you slow down, breathe, and relax." url="/album.jpg" />
            <AlbumCard title="Deep Focus" description="Playlist Peaceful piano to help you slow down, breathe, and relax." url="/album.jpg" />
            <AlbumCard title="Deep Focus" description="Playlist Peaceful piano to help you slow down, breathe, and relax." url="/album.jpg" />
          </section>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl">Paz</h1>
          <div className="flex gap-2 items-center pr-4 lg:pr-0">
            <span tabIndex={0} className="text-white/60 text-sm cursor-pointer hover:underline underline-offset-2 mr-2">
              Ver todos
            </span>
            <ArrowButton variant="left" />
            <ArrowButton variant="right" />
          </div>
        </div>
        <div className="w-full overflow-x-auto md:overflow-x-hidden">
          <section className="grid gap-4 grid-flow-col p-2 auto-rows-max">
            <AlbumCard title="Peaceful Piano" description="Peaceful piano to help you slow down, breathe, and relax." url="/album2.jpg" />
            <AlbumCard title="Peaceful Piano" description="Peaceful piano to help you slow down, breathe, and relax." url="/album2.jpg" />
            <AlbumCard title="Peaceful Piano" description="Peaceful piano to help you slow down, breathe, and relax." url="/album2.jpg" />
            <AlbumCard title="Peaceful Piano" description="Peaceful piano to help you slow down, breathe, and relax." url="/album2.jpg" />
            <AlbumCard title="Peaceful Piano" description="Peaceful piano to help you slow down, breathe, and relax." url="/album2.jpg" />
            <AlbumCard title="Peaceful Piano" description="Peaceful piano to help you slow down, breathe, and relax." url="/album2.jpg" />
          </section>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl">Trabalho</h1>
          <div className="flex gap-2 items-center pr-4 lg:pr-0">
            <span tabIndex={0} className="text-white/60 text-sm cursor-pointer hover:underline underline-offset-2 mr-2">
              Ver todos
            </span>
            <ArrowButton variant="left" />
            <ArrowButton variant="right" />
          </div>
        </div>
        <div id="scrollbar" className="w-full overflow-x-auto md:overflow-x-hidden">
          <section className="grid gap-4 grid-flow-col p-2 auto-rows-max">
            <AlbumCard title="Workday longe" description="Lounge and chill out music for your workday." url="/album3.jpg" />
            <AlbumCard title="Workday longe" description="Lounge and chill out music for your workday." url="/album3.jpg" />
            <AlbumCard title="Workday longe" description="Lounge and chill out music for your workday." url="/album3.jpg" />
            <AlbumCard title="Workday longe" description="Lounge and chill out music for your workday." url="/album3.jpg" />
            <AlbumCard title="Workday longe" description="Lounge and chill out music for your workday." url="/album3.jpg" />
            <AlbumCard title="Workday longe" description="Lounge and chill out music for your workday." url="/album3.jpg" />
          </section>
        </div>
      </section>
    </div>
  );
}
