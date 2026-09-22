import { useState, useRef } from "react";
import { PlayIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
          setIsEnded(false);
          bgVideoRef.current?.play().catch(() => {});
        })
        .catch(() => {});
    } else {
      video.pause();
      bgVideoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (bgVideoRef.current && videoRef.current) {
      if (Math.abs(bgVideoRef.current.currentTime - videoRef.current.currentTime) > 0.4) {
        bgVideoRef.current.currentTime = videoRef.current.currentTime;
      }
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="group relative w-full aspect-[9/16] md:aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl select-none cursor-pointer ring-1 ring-white/10"
    >
      {/* Blurred Ambient Background Video (Desktop widescreen theater mode only) */}
      <video
        ref={bgVideoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="hidden md:block absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
      />

      {/* Main Foreground Video: 100% full vertical on mobile, centered contain on desktop */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => {
          setIsBuffering(false);
          setIsPlaying(true);
          bgVideoRef.current?.play().catch(() => {});
        }}
        onPause={() => {
          setIsPlaying(false);
          bgVideoRef.current?.pause();
        }}
        onEnded={() => {
          setIsPlaying(false);
          setIsEnded(true);
          bgVideoRef.current?.pause();
        }}
        className="relative z-10 w-full h-full object-cover md:object-contain"
      />

      {/* Dark Dim Overlay when paused */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 bg-black/40 transition-opacity duration-300 ${
          !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Buffering Indicator */}
      {isBuffering && (
        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
        </div>
      )}

      {/* Center Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 transition-all duration-300">
          <div className="relative flex items-center justify-center">
            {/* Animated Pulse Rings */}
            <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary/30 animate-ping opacity-75" />
            <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/40 animate-pulse" />

            {/* Play / Replay Button Icon */}
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-primary to-primary-hover text-white shadow-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 active:scale-95 border border-white/30 backdrop-blur-sm">
              {isEnded ? (
                <ArrowPathIcon className="w-9 h-9 sm:w-11 sm:h-11 text-white drop-shadow-md" />
              ) : (
                <PlayIcon className="w-9 h-9 sm:w-11 sm:h-11 ml-1 text-white drop-shadow-md" />
              )}
            </div>
          </div>

          <span className="mt-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-sm font-semibold tracking-wide border border-white/10 shadow-lg group-hover:bg-black/80 transition-colors">
            {isEnded
              ? "Assistir novamente"
              : !hasStarted
              ? "Clique para assistir"
              : "Continuar assistindo"}
          </span>
        </div>
      )}
    </div>
  );
};
