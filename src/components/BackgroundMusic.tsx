import { useEffect, useState } from "react";
import { Music, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Global singleton to prevent duplicate audio
let globalAudio: HTMLAudioElement | null = null;

const getAudio = () => {
  if (!globalAudio) {
    globalAudio = new Audio("/audio/bgm.mp3");
    globalAudio.loop = true;
    globalAudio.volume = 0.08;
  }
  return globalAudio;
};

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = getAudio();
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <Button
      onClick={toggleMusic}
      variant="ghost"
      size="icon"
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300"
      aria-label={isPlaying ? "关闭音乐" : "开启音乐"}
    >
      {isPlaying ? <Music className="w-5 h-5" /> : <Music2 className="w-5 h-5 opacity-50" />}
    </Button>
  );
};

export default BackgroundMusic;
