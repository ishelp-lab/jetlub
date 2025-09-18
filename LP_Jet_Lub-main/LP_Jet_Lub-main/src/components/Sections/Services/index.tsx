import Button from "../../ui/Button";

export const Services = () => {
  const services = [
    {
      title: "Reconhecimento",
      description: "Única troca de óleo 5 estrelas avaliada no Google com mais de 400 avaliações",
        icon: <svg viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- estrela 24x24 centralizada e escalada para caber no viewBox 46x37 -->
  <g transform="translate(4.5, 0) scale(1.5416667)">
    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.402 8.172L12 18.897 4.664 23.169l1.402-8.172L.132 9.211l8.2-1.193L12 .587z" fill="#D62828"/>
  </g>
</svg>
    },
    {
      title: "Fluido de câmbio automático",
      description: "Equipe treinada e experiente para troca de fluido completa da transmissão automática",
      icon: <svg viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="color:#D62828">
  <g transform="translate(4.5, 0) scale(1.5416667)">
    <circle cx="8" cy="14" r="3" fill="currentColor"/>
    <rect x="7.5" y="6.6" width="1" height="2.2" rx="0.5" fill="currentColor"/>
    <rect x="7.5" y="19.2" width="1" height="2.2" rx="0.5" fill="currentColor"/>
    <rect x="4.6" y="13.5" width="2.2" height="1" rx="0.5" fill="currentColor"/>
    <rect x="9.2" y="13.5" width="2.2" height="1" rx="0.5" fill="currentColor"/>
    <path d="M16 3 Q10 9 12 15 Q16 21 20 15 Q22 9 16 3 Z" fill="currentColor"/>
  </g>
</svg>
    },
    {
      title: "Profissionais",
      description: "Equipe técnica com mais de 15 anos de experiência na área de troca de óleo, executando um serviço com agilidade e muita transparência para nossos clientes",
      icon: <svg viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g transform="translate(4.5,0) scale(1.5416667)" fill="#D62828">
    <circle cx="12" cy="8" r="3"/>
    <path d="M6 20v-2c0-3.2 4.5-4.5 6-4.5s6 1.3 6 4.5v2H6Z"/>
    <circle cx="6.5" cy="9.5" r="2"/>
    <rect x="4" y="14.5" width="5" height="3.5" rx="1.75"/>
    <path d="M18 14.2l3 .8v3.8c0 1.5-1 3-2.5 3.6L18 23l-.5-.6c-1.5-.6-2.5-2.1-2.5-3.6V15l3-.8Z"/>
    <path d="M16.4 18.7l.9-.9 1.6 1.6 2.7-2.7.9.9-3.6 3.6-2.5-2.5Z" fill="white"/>
  </g>
</svg>
    }
  ]

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-background" id="servicos">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary italic">
            Nossos Diferenciais
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              className="bg-card rounded-2xl p-8 shadow-lg text-center 
                               transform transition-all duration-300 ease-in-out 
                               hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                              cursor-pointer
                               group"
              key={index}
            >
              <div className="w-11 h-9 mx-auto mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <div className="transition-all duration-300 group-hover:drop-shadow-lg">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-text mb-4 transition-colors duration-300 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-text-paragraph mb-6 transition-colors duration-300 group-hover:text-muted-foreground">
                {service.description}
              </p>
              <Button color="link" size="sm" className="text-sm transition-all duration-300 group-hover:scale-105" onClick={() => {
                document.querySelector('#contato')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                Saiba mais
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
