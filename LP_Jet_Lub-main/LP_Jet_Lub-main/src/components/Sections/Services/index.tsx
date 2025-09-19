import Button from "../../ui/Button";

export const Services = () => {
  const services = [
    {
      title: "Reconhecimento",
      description: "Única troca de óleo 5 estrelas avaliada no Google com mais de 400 avaliações",
      icon: <svg height="35pt" viewBox="0 -10 511.98685 511" width="35pt" xmlns="http://www.w3.org/2000/svg" id="fi_1828884"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#D62828"></path></svg>
    },
    {
      title: "Fluido de câmbio automático",
      description: "Equipe treinada e experiente para troca de fluido completa da transmissão automática.",
      icon: <svg
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.9141 2.75C20.9141 3.99453 21.9195 5 23.1641 5H25.4141C26.6586 5 27.6641 6.00547 27.6641 7.25C27.6641 8.49453 26.6586 9.5 25.4141 9.5H2.91406C1.66953 9.5 0.664062 10.5055 0.664062 11.75C0.664062 12.9945 1.66953 14 2.91406 14H25.4141C29.1406 14 32.1641 10.9766 32.1641 7.25C32.1641 3.52344 29.1406 0.5 25.4141 0.5H23.1641C21.9195 0.5 20.9141 1.50547 20.9141 2.75ZM25.4141 27.5C25.4141 28.7445 26.4195 29.75 27.6641 29.75H29.9141C33.6406 29.75 36.6641 26.7266 36.6641 23C36.6641 19.2734 33.6406 16.25 29.9141 16.25H2.91406C1.66953 16.25 0.664062 17.2555 0.664062 18.5C0.664062 19.7445 1.66953 20.75 2.91406 20.75H29.9141C31.1586 20.75 32.1641 21.7555 32.1641 23C32.1641 24.2445 31.1586 25.25 29.9141 25.25H27.6641C26.4195 25.25 25.4141 26.2555 25.4141 27.5ZM9.66406 36.5H11.9141C15.6406 36.5 18.6641 33.4766 18.6641 29.75C18.6641 26.0234 15.6406 23 11.9141 23H2.91406C1.66953 23 0.664062 24.0055 0.664062 25.25C0.664062 26.4945 1.66953 27.5 2.91406 27.5H11.9141C13.1586 27.5 14.1641 28.5055 14.1641 29.75C14.1641 30.9945 13.1586 32 11.9141 32H9.66406C8.41953 32 7.41406 33.0055 7.41406 34.25C7.41406 35.4945 8.41953 36.5 9.66406 36.5Z"
          fill="#D62828"
        />
      </svg>
    },
    {
      title: "Profissionais",
      description: "Equipe técnica com mais de 15 anos de experiência na área de troca de óleo, executando um serviço com agilidade e muita transparência para nossos clientes",
      icon: <svg viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.9922 9.5C24.2367 9.5 25.2422 8.49453 25.2422 7.25C25.2422 6.00547 24.2367 5 22.9922 5H13.9922C12.7477 5 11.7422 6.00547 11.7422 7.25C11.7422 8.49453 12.7477 9.5 13.9922 9.5H16.2422V11.75H10.6172H7.24219H3.86719C2.00391 11.75 0.492188 13.2617 0.492188 15.125V19.6812C0.492188 21.0172 1.27969 22.2266 2.49609 22.768L7.24219 24.8773V26.375C7.24219 28.2383 8.75391 29.75 10.6172 29.75H28.8352C30.1289 29.75 31.3523 29.1945 32.2102 28.2242L45.0352 13.6977C45.9 12.7203 45.0141 11.2086 43.7414 11.4828L31.9922 14L28.4414 12.2281C27.8156 11.9188 27.1266 11.75 26.4305 11.75H20.7422V9.5H22.9922ZM7.24219 15.125V21.1789L3.86719 19.6812V15.125H7.24219Z" fill="#D62828" />
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
