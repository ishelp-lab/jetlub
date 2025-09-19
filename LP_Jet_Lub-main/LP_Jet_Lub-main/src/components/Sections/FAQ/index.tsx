import { useState } from "react";

type FAQItem = { q: string; a: string };

const faqs: FAQItem[] = [
  {
    q: "Quanto tempo leva a troca de óleo?",
    a: "Em média 20 a 40 minutos, dependendo do veículo e do filtro.",
  },
  {
    q: "Vocês conferem os principais itens durante o serviço?",
    a: "Sim. Verificamos nível de fluídos, luz espia de serviço e vazamentos aparentes.",
  },
  {
    q: "Trabalham com fluido de câmbio automático?",
    a: "Sim. Temos equipe treinada para troca completa conforme o procedimento da montadora.",
  },
  {
    q: "Posso levar meu próprio óleo/filtro?",
    a: "Pode. Avaliamos a especificação recomendada e fazemos o serviço normalmente.",
  },
  {
    q: "Emitimos nota e garantia?",
    a: "Sim, nota fiscal e garantia do serviço/peças conforme cada caso.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container mx-auto px-4 py-12 scroll-mt-24">
      <h2 className="mb-8 text-center text-2xl font-bold">Perguntas frequentes</h2>

      <div className="mx-auto max-w-3xl rounded-xl border border-zinc-200 bg-white shadow-sm divide-y">
        {faqs.map((item, i) => {
          const expanded = open === i;
          return (
            <div key={i} className="p-4">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(expanded ? null : i)}
              >
                <span className="font-medium">{item.q}</span>
                <span
                  aria-hidden
                  className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                >
                  ⌄
                </span>
              </button>

              <div
                id={`faq-panel-${i}`}
                role="region"
                hidden={!expanded}
                className="pt-3 text-sm text-zinc-700"
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
