import Button from "./ui/Button"
import { ThemeToggle } from "./ui/ThemeToggle"

export const Pallete = () => {
    return (
        <div className="min-h-screen bg-background p-8 pt-24">
          <h1 className="text-4xl font-bold text-primary mb-6">
            Paleta de Cores Personalizada
          </h1>
          
          <div className="space-y-6">
            <div className="bg-background border border-secondary p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-primary mb-4">Cores Primárias</h2>
              <div className="flex gap-2 mb-4">
                <div className="w-12 h-12 bg-primary rounded shadow"></div>
                <div className="w-12 h-12 bg-background rounded shadow"></div>
                <div className="w-12 h-12 bg-secondary rounded shadow"></div>
                <div className="w-12 h-12 bg-muted rounded shadow"></div>
                <div className="w-12 h-12 bg-accent rounded shadow"></div>
                <div className="w-12 h-12 bg-destructive rounded shadow"></div>
                <div className="w-12 h-12 bg-foreground rounded shadow"></div>
                <div className="w-12 h-12 bg-card rounded shadow"></div>
                <div className="w-12 h-12 bg-border rounded shadow"></div>
                <div className="w-12 h-12 bg-input rounded shadow"></div>
              </div>
              <p className="text-text-paragraph">
                Exemplo de uso da cor primária em diferentes tons
              </p>
            </div>

          </div>

          <div className="flex gap-2 border border-secondary p-6 rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-primary mb-2">Botões</h2>
            <Button color="primary" size="sm" title="Botão Primário" onClick={() => console.log('clicked')}>
              Botão Primário
              </Button>
            <Button color="secondary" size="sm" title="Botão Secundário" onClick={() => console.log('clicked')}>
              Botão Secundário
            </Button>
            <Button color="link" size="sm" title="Botão Destrutivo" onClick={() => console.log('clicked')}>
              Link
            </Button>
            <ThemeToggle />
          </div>

        </div>
      )
}