import { VideoPlayer } from "./VideoPlayer";

export const Video = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-xl border border-border/50 p-6 sm:p-10 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-3">
              Vídeo Exclusivo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Assista e descubra o lugar certo para cuidar do seu carro com qualidade
            </h2>
          </div>

          <div className="relative max-w-sm sm:max-w-md md:max-w-4xl mx-auto">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-3xl blur-xl opacity-60 pointer-events-none" />

            {/* Custom Video Player */}
            <VideoPlayer src="/video-vsl-jetlub.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
};
