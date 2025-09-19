import Button from '../../ui/Button'

/** ------ seus ícones, só removi width/height fixos e marquei como block ------ */
const StarIcon = () => (
  <svg viewBox="0 0 46 37" aria-hidden="true" className="block" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(4.5,0) scale(1.5416667)">
      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.402 8.172L12 18.897 4.664 23.169l1.402-8.172L.132 9.211l8.2-1.193L12 .587z" fill="#D62828"/>
    </g>
  </svg>
)

const FluidIcon = () => (
  <svg viewBox="0 0 46 37" fill="none" aria-hidden="true" className="block" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(4.5,0) scale(1.5416667)" fill="#D62828">
      <rect x="0.5" y="7" width="9" height="2" rx="0.6"/>
      <rect x="1.5" y="9.2" width="7" height="2" rx="0.6"/>
      <path d="M2.6 11.2H7.4L5.8 14H4.2L2.6 11.2Z"/>
      <rect x="4.5" y="14" width="1" height="3" rx="0.5"/>
      <path d="M5 18.2C6.6 20.3 6.6 22 5 23.5C3.4 22 3.4 20.3 5 18.2Z"/>
      <rect x="13.5" y="7.5" width="10" height="13.2" rx="3"/>
      <rect x="14.7" y="4.4" width="3" height="3.4" rx="0.8"/>
      <rect x="13.6" y="3.2" width="5.2" height="1.2" rx="0.6"/>
      <rect x="14.2" y="8.4" width="2.6" height="11.4" rx="1" fill="white"/>
      <rect x="15" y="9.2"  width="1.2" height="1.2" rx="0.4"/>
      <rect x="15" y="10.9" width="1.2" height="1.2" rx="0.4"/>
      <rect x="15" y="12.6" width="1.2" height="1.2" rx="0.4"/>
      <rect x="15" y="14.3" width="1.2" height="1.2" rx="0.4"/>
      <rect x="15" y="16.0" width="1.2" height="1.2" rx="0.4"/>
      <rect x="15" y="17.7" width="1.2" height="1.2" rx="0.4"/>
      <path d="M19.6 16.3h3.9v5.4h-3.9a2 2 0 0 1-2-2v-1.4a2 2 0 0 1 2-2Z"/>
      <rect x="21.1" y="18.3" width="1.2" height="1.2" rx="0.6" fill="white"/>
      <rect x="22.8" y="21.0" width="1.2" height="1.4" rx="0.6"/>
      <path d="M18.9 16.3c0.9-1.4 2.2-2 3.5-2h1.1v2h-4.6Z"/>
    </g>
  </svg>
)

const TeamIcon = () => (
  <svg viewBox="0 0 46 37" fill="none" aria-hidden="true" className="block" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(4.5,0) scale(1.5416667)" fill="#D62828">
      <circle cx="12" cy="8" r="3"/>
      <path d="M6 20v-2c0-3.2 4.5-4.5 6-4.5s6 1.3 6 4.5v2H6Z"/>
      <circle cx="6.5" cy="9.5" r="2"/>
      <rect x="4" y="14.5" width="5" height="3.5" rx="1.75"/>
      <path d="M18 14.2l3 .8v3.8c0 1.5-1 3-2.5 3.6L18 23l-.5-.6c-1.5-.6-2.5-2.1-2.5-3.6V15l3-.8Z"/>
      <path d="M16.4 18.7l.9-.9 1.6 1.6 2.7-2.7.9.9-3.6 3.6-2.5-2.5Z" fill="white"/>
    </g>
  </svg>
)

/** ------ seção no estilo “antigo” (ícone pequeno, card centralizado, hover leve) ------ */
export const Services = () => {
  const services = [
    {
      title: 'Reconhecimento',
      description: 'Única troca de óleo 5 estrelas avaliada no Google com mais de 400 avaliações',
      icon: <StarIcon />,
    },
    {
      title: 'Fluido de câmbio automático',
      description: 'Equipe treinada e experiente para troca de fluido completa da transmissão automática',
      icon: <FluidIcon />,
    },
    {
      title: 'Profissionais',
      description:
        'Equipe técnica com mais de 15 anos de experiência na área de troca de óleo, executando um serviço com agilidade e muita transparência',
      icon: <TeamIcon />,
    },
  ]

  return (
    <section id="diferenciais" className="container mx-auto px-4 py-12">
      <h2 className="mb-10 text-center text-2xl font-bold">Nossos Diferenciais</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <article
            key={i}
            className="
              group rounded-2xl border border-zinc-200 bg-white p-6 text-center
              shadow-sm transition hover:-translate-y-1 hover:shadow-md
            "
          >
            {/* ícone 15×15 centralizado, sem baseline */}
            <div
              className="
                mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full
                bg-[#D62828]/10 leading-none
                [&>svg]:block [&>svg]:h-[15px] [&>svg]:w-[15px]
              "
            >
              {s.icon}
            </div>

            <h3 className="mb-1 text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-zinc-700">{s.description}</p>
          </article>
        ))}
      </div>

      {/* botão opcional para CTA/contato (âncora nativa, robusta) */}
      <div className="mt-10 flex justify-center">
        <a
          href="#contato"
          className="inline-flex items-center rounded-md bg-[#D62828] px-4 py-2 text-white transition hover:opacity-90"
        >
          Saiba mais
        </a>
      </div>
    </section>
  )
}
