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
      icon: <svg clip-rule="evenodd" fill-rule="evenodd" width="35pt" height="35pt" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="35pt" xmlns="http://www.w3.org/2000/svg" id="fi_7483239"><g id="Icon" fill="#D62828"><path d="m13.25 6.25v2.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.75h-.75c-.464 0-.909.184-1.237.513-.329.328-.513.773-.513 1.237v10.5c0 .966.783 1.75 1.75 1.75h1c.138 0 .25.112.25.25v.5c0 .464.184.909.513 1.237.328.329.773.513 1.237.513h4c.464 0 .909-.184 1.237-.513.329-.328.513-.773.513-1.237 0-.871 0-2.129 0-3 0-.464-.184-.909-.513-1.237-.328-.329-.773-.513-1.237-.513h-3c-.066 0-.13-.026-.177-.073s-.073-.111-.073-.177v-4c0-.066.026-.13.073-.177s.111-.073.177-.073h2c.967 0 1.75-.783 1.75-1.75v-2c0-.967-.784-1.75-1.75-1.75z"></path><circle cx="12.5" cy="3.5" r="2.25"></circle><path d="m7 8.25h-2c-.414 0-.75.336-.75.75s.336.75.75.75h2c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path><path d="m7 11.75h-2c-.414 0-.75.336-.75.75s.336.75.75.75h2c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path><path d="m7 15.25h-2c-.414 0-.75.336-.75.75s.336.75.75.75h2c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path><path d="m7 18.75h-2c-.414 0-.75.336-.75.75s.336.75.75.75h2c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path><path d="m11.75 6.25h1.5v-1.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"></path></g></svg>
    },
    {
      title: "Profissionais",
      description: "Equipe técnica com mais de 15 anos de experiência na área de troca de óleo, executando um serviço com agilidade e muita transparência para nossos clientes",
      icon: <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 96 96" width="35pt" height="35pt" fill="#D62828" xmlns="http://www.w3.org/2000/svg" id="fi_11775333"><g><path d="m30.951 32.108c.604 1.89.949 3.612.949 5.034 0 9.286-7.539 16.825-16.825 16.825-2.212 0-4.325-.428-6.261-1.205-.096 2.068.01 4.144.318 6.197l7.883.727c.6 2.588 1.623 5.059 3.029 7.313l-5.059 6.088c1.878 2.543 4.126 4.791 6.668 6.669l6.089-5.059c2.254 1.406 4.725 2.429 7.313 3.029l.727 7.883c3.126.47 6.305.47 9.431 0l.728-7.883c2.588-.6 5.059-1.623 7.313-3.029l6.088 5.059c2.543-1.878 4.791-4.126 6.669-6.669l-5.059-6.088c1.406-2.254 2.429-4.725 3.029-7.313l7.882-.727c.47-3.127.47-6.305 0-9.432l-7.882-.727c-.6-2.588-1.623-5.059-3.029-7.313l5.059-6.088c-1.878-2.543-4.126-4.791-6.669-6.669l-6.088 5.059c-2.254-1.406-4.725-2.429-7.313-3.029l-.728-7.883c-3.126-.47-6.305-.47-9.431 0l-.727 7.883c-1.408.326-2.781.778-4.104 1.348zm9.547 11.351c5.952 0 10.784 4.832 10.784 10.784s-4.832 10.784-10.784 10.784-10.784-4.832-10.784-10.784 4.832-10.784 10.784-10.784z"></path><path d="m15.075 10.039s-13.825 18.972-13.825 27.103c0 7.63 6.195 13.825 13.825 13.825s13.825-6.195 13.825-13.825c0-8.131-13.825-27.103-13.825-27.103z"></path><path d="m72.878 23.232h20.372c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-20.372c-.827 0-1.5.672-1.5 1.5s.673 1.5 1.5 1.5z"></path><path d="m72.878 30.365h13.078c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-13.078c-.827 0-1.5.672-1.5 1.5s.673 1.5 1.5 1.5z"></path><path d="m72.878 37.498h6.539c.828 0 1.5-.673 1.5-1.5 0-.828-.672-1.5-1.5-1.5h-6.539c-.827 0-1.5.672-1.5 1.5 0 .827.673 1.5 1.5 1.5z"></path></g></svg>
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
