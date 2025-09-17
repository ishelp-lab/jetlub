export const Video = () => {
    return (
        <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="bg-card rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-primary text-center mb-12">
              Assista e descubra o cuidado por trás de cada projeto
            </h2>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
              <iframe
                src="https://www.youtube.com/embed/uSr41Le_1yc?si=AZuap7yBi5HadWBH"
                title="Video demonstrativo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>   
    )
}
