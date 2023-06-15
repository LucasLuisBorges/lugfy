import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SpeakerSimpleNone, SpeakerSimpleSlash, SkipBack, SkipForward } from 'phosphor-react';

export function PlayerView() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(false);
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      setIsMuted(!isMuted);
      if (isMuted) {
        audioRef.current.volume = volume;
      } else {
        audioRef.current.volume = 0;
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('durationchange', handleDurationChange);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('durationchange', handleDurationChange);
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleDurationChange = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(event.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="flex h-[8vh] w-full bg-gradient-to-br from-[#121212] to-[#181818] items-center justify-between px-8">
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onDurationChange={handleDurationChange}>
        <source src="/audio.mp3" type="audio/mpeg" />
      </audio>
      <div className="flex gap-4 w-[30vw] items-center">
        <span className="text-white text-sm">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration}
          step={0.1}
          className="w-full"
          value={isSeeking ? currentTime : currentTime.toFixed(1)}
          onChange={handleSeek}
          onMouseDown={() => setIsSeeking(true)}
          onMouseUp={() => setIsSeeking(false)}
          onTouchStart={() => setIsSeeking(true)}
          onTouchEnd={() => setIsSeeking(false)}
        />
        <span className="text-white text-sm">{formatTime(duration)}</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-blue-500 rounded-full p-2 cursor-pointer text-white mt-2">
          <SkipBack size={23} />
        </div>
        <div className="bg-blue-500 rounded-full p-2 cursor-pointer text-white" onClick={handleTogglePlay}>
          {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        </div>
        <div className="bg-blue-500 rounded-full p-2 cursor-pointer text-white mt-2">
          <SkipForward size={23} />
        </div>
      </div>
      <div className="w-[30vw] flex justify-end">
        <div className="flex items-center text-white gap-2">
          <div className="cursor-pointer" onClick={handleToggleMute}>
            {isMuted ? <SpeakerSimpleSlash size={20} /> : <SpeakerSimpleNone size={20} />}
          </div>
          <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={handleVolumeChange} />
        </div>
      </div>
    </section>
  );
}
