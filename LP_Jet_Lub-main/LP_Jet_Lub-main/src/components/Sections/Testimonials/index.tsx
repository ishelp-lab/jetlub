import testimonial from "@/assets/testimonial.svg";
import { useState } from 'react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      name: "Douglas H. Melo",
      image: testimonial,
      rating: 5,
      comment: "Excelente atendimento, preços muito bons, e funcionários qualificados. Recomendo a todos!"
    },
    {
      name: "Rodney Leandro",
      image: testimonial,
      rating: 5,
      comment: "Super indico preço justo e profissionalismo total com seus clientes, fui muito bem atendido obrigado a toda equipe estão de parabéns."
    },
    {
      name: "Dyone Parros",
      image: testimonial,
      rating: 5,
      comment: "Ótimo atendimento, muito profissional, serviço de primeira super indico!"
    },
    {
      name: "Renato Yervant Badiglian",
      image: testimonial,
      rating: 5,
      comment: "Pessoal altamente profissional. Excelente atendimento e preços acessiveis."
    },
    {
      name: "Gleiciele Dias",
      image: testimonial,
      rating: 5,
      comment: "Ótimo atendimento, pessoal muito simpático e educado, estão de parabéns pelo ótimo serviço!"
    }, {
      name: "Thyago Melo",
      image: testimonial,
      rating: 5,
      comment: "Ótimo atendimento! Muito atenciosos e cuidam do seu carro como se fosse deles!"
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Calcular quais testimonials mostrar
  const startIndex = currentIndex * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  const handleTransition = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? totalPages - 1 : currentIndex - 1;
    handleTransition(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === totalPages - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex);
  };

  const handlePageClick = (index: number) => {
    if (index !== currentIndex) {
      handleTransition(index);
    }
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12" id="testimonials">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-8 transition-all duration-500 ease-in-out">
            O que falam sobre nós?
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className={`grid md:grid-cols-3 gap-12 mb-8 pt-8 transition-all duration-500 ease-in-out transform ${isTransitioning
            ? 'opacity-0 translate-x-4 scale-95'
            : 'opacity-100 translate-x-0 scale-100'
            }`}>
            {currentTestimonials.map((testimonial, index) => (
              <div
                className="bg-card rounded-[30px] p-8 pt-12 shadow-lg relative border border-border
                             transform transition-all duration-300 ease-in-out
                             hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
                             md:hover:scale-105"
                key={startIndex + index}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                { /* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:scale-110 z-10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full border-4 border-primary transition-all duration-300 bg-background"
                        />
                      </div> */}
                <div className="pt-8 text-center">
                  <h3 className="text-lg font-bold text-card-foreground mb-2 transition-colors duration-300 hover:text-primary">
                    {testimonial.name}
                  </h3>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 transition-all duration-200 hover:scale-110 ${i < testimonial.rating
                          ? 'text-primary fill-current'
                          : 'text-muted-foreground fill-current'
                          }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg transition-colors duration-300">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-5 mb-6">
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="w-20 h-20 rounded-full border border-border bg-card flex items-center justify-center 
                         hover:bg-muted transition-all duration-300 ease-in-out
                         active:scale-95 hover:scale-105 hover:shadow-lg
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transform hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6 text-foreground transition-transform duration-300 group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="w-20 h-20 rounded-full border border-border bg-card flex items-center justify-center 
                         hover:bg-muted transition-all duration-300 ease-in-out
                         active:scale-95 hover:scale-105 hover:shadow-lg
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transform hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6 text-foreground transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out
                            hover:scale-125 active:scale-90
                            disabled:cursor-not-allowed ${currentIndex === i
                  ? 'bg-primary shadow-lg scale-110'
                  : 'bg-muted-foreground hover:bg-foreground'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}