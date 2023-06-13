import Image from 'next/image';
import { Play } from 'phosphor-react';

export function AlbumCard() {
  return (
    <div className="group select-none relative flex flex-col gap-2 w-52 h-72 bg-gradient-to-br from-[#121212] to-[#181818] rounded-md shadow-md p-4 transform hover:scale-105 hover:shadow-lg transition-all duration-200">
      <Image alt="Music album" src="/album.jpg" height={194} width={194} className="rounded-lg" />
      <h1 className="text-white text-base font-bold">Deep Focus</h1>
      <p className="text-white/60 text-sm line-clamp-2 overflow-hidden">Playlist Peaceful piano to help you slow down, breathe, and relax.</p>
      <Play
        size={42}
        className="absolute cursor-pointer text-white bg-blue-500 rounded-full p-2 bottom-14 right-8 opacity-0 scale-0 transform group-hover:bottom-24 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-50"
      />
    </div>
  );
}
