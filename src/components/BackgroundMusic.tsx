
import { useRef, useEffect } from "react";

interface BackgroundMusicProps {
  isPlaying: boolean;
}

export default function BackgroundMusic({ isPlaying }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log("Audio play failed:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src="/lovable-uploads/lofi-romance.mp3"
      loop
      preload="auto"
      className="hidden"
    />
  );
}
