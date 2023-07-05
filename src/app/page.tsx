'use client';
import { AlbumCard, AlbumSection } from '@/shared/components';
import { MainLayout } from '@/shared/components/layout/mainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8 mb-20">
        <AlbumSection title="Foco">
          <AlbumCard
            title="Deep Focus"
            description="Playlist Peaceful piano to help you slow down, breathe, and relax."
            url="/album.jpg"
          />
          <AlbumCard
            title="Deep Focus"
            description="Playlist Peaceful piano to help you slow down, breathe, and relax."
            url="/album.jpg"
          />
          <AlbumCard
            title="Deep Focus"
            description="Playlist Peaceful piano to help you slow down, breathe, and relax."
            url="/album.jpg"
          />
          <AlbumCard
            title="Deep Focus"
            description="Playlist Peaceful piano to help you slow down, breathe, and relax."
            url="/album.jpg"
          />
          <AlbumCard
            title="Deep Focus"
            description="Playlist Peaceful piano to help you slow down, breathe, and relax."
            url="/album.jpg"
          />
          <AlbumCard
            title="Deep Focus"
            description="Playlist Peaceful piano to help you slow down, breathe, and relax."
            url="/album.jpg"
          />
        </AlbumSection>

        <AlbumSection title="Paz">
          <AlbumCard
            title="Peaceful Piano"
            description="Peaceful piano to help you slow down, breathe, and relax."
            url="/album2.jpg"
          />
          <AlbumCard
            title="Peaceful Piano"
            description="Peaceful piano to help you slow down, breathe, and relax."
            url="/album2.jpg"
          />
          <AlbumCard
            title="Peaceful Piano"
            description="Peaceful piano to help you slow down, breathe, and relax."
            url="/album2.jpg"
          />
          <AlbumCard
            title="Peaceful Piano"
            description="Peaceful piano to help you slow down, breathe, and relax."
            url="/album2.jpg"
          />
          <AlbumCard
            title="Peaceful Piano"
            description="Peaceful piano to help you slow down, breathe, and relax."
            url="/album2.jpg"
          />
          <AlbumCard
            title="Peaceful Piano"
            description="Peaceful piano to help you slow down, breathe, and relax."
            url="/album2.jpg"
          />
          <AlbumCard
            title="Peaceful Piano"
            description="Peaceful piano to help you slow down, breathe, and relax."
            url="/album2.jpg"
          />
        </AlbumSection>

        <AlbumSection title="Trabalho">
          <AlbumCard
            title="Workday longe"
            description="Lounge and chill out music for your workday."
            url="/album3.jpg"
          />
          <AlbumCard
            title="Workday longe"
            description="Lounge and chill out music for your workday."
            url="/album3.jpg"
          />
          <AlbumCard
            title="Workday longe"
            description="Lounge and chill out music for your workday."
            url="/album3.jpg"
          />
          <AlbumCard
            title="Workday longe"
            description="Lounge and chill out music for your workday."
            url="/album3.jpg"
          />
          <AlbumCard
            title="Workday longe"
            description="Lounge and chill out music for your workday."
            url="/album3.jpg"
          />
          <AlbumCard
            title="Workday longe"
            description="Lounge and chill out music for your workday."
            url="/album3.jpg"
          />
          <AlbumCard
            title="Workday longe"
            description="Lounge and chill out music for your workday."
            url="/album3.jpg"
          />
          <AlbumCard
            title="Workday longe"
            description="Lounge and chill out music for your workday."
            url="/album3.jpg"
          />
        </AlbumSection>
      </div>
    </MainLayout>
  );
}
