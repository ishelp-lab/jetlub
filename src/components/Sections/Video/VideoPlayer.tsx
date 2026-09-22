import { useState, useRef, useEffect, useCallback } from "react";
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

const formatTime = (timeInSeconds: number) => {
  if (isNaN(timeInSeconds) || timeInSeconds < 0) return "00:00";
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [clickFeedback, setClickFeedback] = useState<"play" | "pause" | null>(null);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState<number>(0);
  const [isScrubbing, setIsScrubbing] = useState(false);

  // Play / Pause toggle
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
        setClickFeedback("play");
      }).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
      setClickFeedback("pause");
    }

    setTimeout(() => {
      setClickFeedback(null);
    }, 600);
  }, []);

  // Auto-hide controls
  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying && !isScrubbing) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
        setShowSpeedMenu(false);
      }, 2500);
    }
  }, [isPlaying, isScrubbing]);

  const handleMouseLeave = useCallback(() => {
    if (isPlaying && !isScrubbing) {
      setShowControls(false);
      setShowSpeedMenu(false);
    }
  }, [isPlaying, isScrubbing]);

  // Video event handlers
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isScrubbing) return;
    setCurrentTime(video.currentTime);

    // Buffer percentage
    if (video.buffered.length > 0) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      setBuffered((bufferedEnd / video.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const handleVolumeChange = (newVolume: number) => {
    const video = videoRef.current;
    if (!video) return;
    const clamped = Math.max(0, Math.min(1, newVolume));
    video.volume = clamped;
    setVolume(clamped);
    if (clamped === 0) {
      video.muted = true;
      setIsMuted(true);
    } else if (isMuted) {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      if (volume === 0) {
        setVolume(0.5);
        video.volume = 0.5;
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const changePlaybackRate = (rate: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = rate;
    setPlaybackRate(rate);
    setShowSpeedMenu(false);
  };

  const skipTime = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.duration || 0, video.currentTime + seconds));
  };

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is focused on an input/textarea
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      const container = containerRef.current;
      if (!container) return;

      // Only respond if container or child is focused or mouse is over it
      if (e.key === " " || e.key === "k" || e.key === "K") {
        e.preventDefault();
        togglePlay();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        toggleMute();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        skipTime(-5);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        skipTime(5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePlay, toggleFullscreen]);

  // Scrubbing on progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = progressBarRef.current?.getBoundingClientRect();
    const video = videoRef.current;
    if (!rect || !video || !duration) return;

    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressBarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = progressBarRef.current?.getBoundingClientRect();
    if (!rect || !duration) return;

    const hoverX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, hoverX / rect.width));
    setHoverPosition(percentage * 100);
    setHoverTime(percentage * duration);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const speedOptions = [0.75, 1, 1.25, 1.5, 2];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl select-none transition-all duration-300 ring-1 ring-white/10 ${
        isFullscreen ? "rounded-none h-screen w-screen" : ""
      }`}
    >
      {/* Background Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onDoubleClick={toggleFullscreen}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => {
          setIsBuffering(false);
          setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Subtle Top & Bottom Gradient Shadows for High Contrast */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Buffering Indicator */}
      {isBuffering && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
        </div>
      )}

      {/* Click feedback animation (Center icon ripple) */}
      {clickFeedback && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-ping duration-500">
          <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/90">
            {clickFeedback === "play" ? (
              <PlayIcon className="w-10 h-10 ml-1 text-primary" />
            ) : (
              <PauseIcon className="w-10 h-10 text-primary" />
            )}
          </div>
        </div>
      )}

      {/* Big Center Play Button Overlay (when paused or before start) */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group/center transition-all duration-300 z-10"
        >
          <div className="relative flex items-center justify-center">
            {/* Animated Pulse Rings */}
            <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary/30 animate-ping opacity-75" />
            <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/40 animate-pulse" />

            {/* Main Play Circle */}
            <button
              type="button"
              aria-label="Reproduzir vídeo"
              className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-primary to-primary-hover text-white shadow-2xl flex items-center justify-center transform transition-all duration-300 group-hover/center:scale-110 active:scale-95 border border-white/30 backdrop-blur-sm cursor-pointer"
            >
              <PlayIcon className="w-9 h-9 sm:w-11 sm:h-11 ml-1 text-white drop-shadow-md" />
            </button>
          </div>

          {!hasStarted && (
            <span className="mt-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-sm font-semibold tracking-wide border border-white/10 shadow-lg group-hover/center:bg-black/80 transition-colors">
              Clique para assistir
            </span>
          )}
        </div>
      )}

      {/* Bottom Control Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 pb-4 pt-10 flex flex-col gap-2 transition-all duration-300 ${
          showControls || !isPlaying
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Progress Bar / Scrub Bar */}
        <div
          ref={progressBarRef}
          onClick={handleSeek}
          onMouseMove={handleProgressBarMouseMove}
          onMouseEnter={() => setIsScrubbing(true)}
          onMouseLeave={() => {
            setIsScrubbing(false);
            setHoverTime(null);
          }}
          className="relative group/progress h-2 hover:h-3.5 w-full bg-white/20 rounded-full cursor-pointer transition-all duration-200 flex items-center"
        >
          {/* Buffered Track */}
          <div
            className="absolute top-0 bottom-0 left-0 bg-white/30 rounded-full transition-all"
            style={{ width: `${buffered}%` }}
          />

          {/* Played Track */}
          <div
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-red-600 via-primary to-primary-hover rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />

          {/* Scrub Thumb / Handle */}
          <div
            className="absolute -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-lg border-2 border-primary scale-0 group-hover/progress:scale-100 transition-transform duration-150"
            style={{ left: `${progressPercent}%` }}
          />

          {/* Hover Time Tooltip */}
          {hoverTime !== null && (
            <div
              className="absolute -top-8 -translate-x-1/2 px-2 py-0.5 rounded bg-black/90 backdrop-blur-sm text-white text-[11px] font-mono border border-white/10 pointer-events-none shadow"
              style={{ left: `${hoverPosition}%` }}
            >
              {formatTime(hoverTime)}
            </div>
          )}
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between text-white text-sm">
          {/* Left Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Play / Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
              className="p-1.5 rounded-lg hover:bg-white/15 transition-colors cursor-pointer text-white focus:outline-none"
            >
              {isPlaying ? (
                <PauseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>

            {/* Skip -10s */}
            <button
              type="button"
              onClick={() => skipTime(-10)}
              title="Voltar 10s"
              className="p-1.5 rounded-lg hover:bg-white/15 transition-colors cursor-pointer text-white/80 hover:text-white text-xs font-semibold focus:outline-none hidden sm:flex items-center gap-0.5"
            >
              -10s
            </button>

            {/* Skip +10s */}
            <button
              type="button"
              onClick={() => skipTime(10)}
              title="Avançar 10s"
              className="p-1.5 rounded-lg hover:bg-white/15 transition-colors cursor-pointer text-white/80 hover:text-white text-xs font-semibold focus:outline-none hidden sm:flex items-center gap-0.5"
            >
              +10s
            </button>

            {/* Volume Control */}
            <div className="group/volume relative flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
                className="p-1.5 rounded-lg hover:bg-white/15 transition-colors cursor-pointer text-white focus:outline-none"
              >
                {isMuted || volume === 0 ? (
                  <SpeakerXMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                ) : (
                  <SpeakerWaveIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>

              {/* Volume Slider */}
              <div className="w-0 group-hover/volume:w-20 sm:w-20 transition-all duration-200 overflow-hidden flex items-center">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  aria-label="Volume"
                  className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Timestamp */}
            <div className="text-xs sm:text-sm font-mono text-white/90 select-none">
              <span>{formatTime(currentTime)}</span>
              <span className="text-white/40 mx-1">/</span>
              <span className="text-white/60">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Playback Speed Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                className="px-2 py-1 rounded-lg hover:bg-white/15 text-xs font-semibold text-white/90 hover:text-white transition-colors cursor-pointer focus:outline-none"
              >
                {playbackRate}x
              </button>

              {showSpeedMenu && (
                <div className="absolute bottom-full right-0 mb-2 py-1 bg-neutral-900/95 backdrop-blur-md rounded-xl shadow-xl border border-white/10 text-xs flex flex-col min-w-[70px] z-30">
                  {speedOptions.map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => changePlaybackRate(rate)}
                      className={`px-3 py-1.5 text-left hover:bg-white/10 cursor-pointer transition-colors ${
                        playbackRate === rate ? "text-primary font-bold" : "text-white/80"
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Replay Button (when ended) */}
            {currentTime > 0 && currentTime >= duration && (
              <button
                type="button"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    togglePlay();
                  }
                }}
                title="Reiniciar vídeo"
                className="p-1.5 rounded-lg hover:bg-white/15 transition-colors cursor-pointer text-white focus:outline-none"
              >
                <ArrowPathIcon className="w-5 h-5" />
              </button>
            )}

            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
              className="p-1.5 rounded-lg hover:bg-white/15 transition-colors cursor-pointer text-white focus:outline-none"
            >
              {isFullscreen ? (
                <ArrowsPointingInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <ArrowsPointingOutIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
