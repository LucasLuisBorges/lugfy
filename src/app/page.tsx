'use client';
import { AlbumCard } from '@/shared/components';

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-4">
        <h1 className="text-white font-semibold text-2xl">Foco</h1>
        <AlbumCard />
      </section>
    </>
  );
}
