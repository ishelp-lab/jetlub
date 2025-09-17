import Button from '@/components/ui/Button';
import { faqData } from './faqData';
import { FAQItem } from './faqItem';

export const FAQ = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços e cuidados com seu veículo
          </p>
        </div>
        {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
        ))}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <Button color="primary" size="sm" className="w-fit" onClick={() => {
            document.querySelector('#contato')?.scrollIntoView({
                behavior: 'smooth'
              });
          }}>
            Entre em contato conosco
          </Button>
        </div>
      </div>
    </section>
  );
}; 