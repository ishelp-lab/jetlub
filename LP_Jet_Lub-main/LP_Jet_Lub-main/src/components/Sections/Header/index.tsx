import { ThemeToggle } from "@/components/ui";
import { useTheme } from "@/hooks/useTheme";
import Button from "../../ui/Button";
import logoDark from '/logo-jet-lub-dark.png';
import logoLight from '/logo-jet-lub-light.png';

export const Header = () => {

    const { theme } = useTheme();
    const links = [
        {
            label: 'Home',
            href: '#hero'
        },
        {
            label: 'Sobre',
            href: '#sobre'
        },
        {
            label: 'Serviços',
            href: '#servicos'
        },
        {
            label: 'Localização',
            href: '#localizacao'
        }
    ]

    return (
        <header className="w-full h-16 bg-background shadow-lg sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="text-2xl font-bold text-primary tracking-tight">
            <img src={theme === 'dark' ? logoDark : logoLight} alt="Jet Lub" className="w-15 h-15" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Button color="link" size="sm" className="text-sm" onClick={() => {
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: 'smooth'
                });
                }}>
                  {link.label}
                </Button>
              ))}

          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button color="primary" size="sm" className="text-sm" onClick={() => {
              document.querySelector('#contato')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
              Agende agora
            </Button>
          </div>
        </div>
      </header>
    )
}