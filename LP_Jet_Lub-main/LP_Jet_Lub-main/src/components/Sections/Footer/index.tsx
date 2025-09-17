import Button from "@/components/ui/Button";

export const Footer = () => {
  const contaccInfo = {
    address: 'Av. Floriano Peixoto, 1591 - Nossa Sra. Aparecida, Uberlândia - MG, 38400-700',
    phone: '+55 (34) 3045-4595',
    email: 'contato@jetlub.com.br'
  }

  const socialLinks = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z"
            fill="currentColor"
          />
        </svg>
      ),
      text: '@jetlub',
      url: 'https://web.facebook.com/people/Jet-Lub/100091790870529/?_rdc=1&_rdr#'
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
            fill="currentColor"
          />
        </svg>
      ),
      text: '@jetlub_udi',
      url: 'https://www.instagram.com/jetlub_udi/'
    }
  ]

  return (
    <footer className="bg-background py-12 shadow-lg border-t border-border rounded-t-3xl">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-base leading-6">
              {contaccInfo.address}
              <br />
              {contaccInfo.phone}
              <br />
              {contaccInfo.email}
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg font-bold mb-4">
              Veja na prática o que torna a Jet Lub diferente
            </p>
            <Button color="primary" size="sm" className="text-sm" onClick={() => {
              document.querySelector('#contato')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
              Agende agora
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col items-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-4 border-t border-gray-600 opacity-80">
          <p className="text-sm text-foreground">
            © {new Date().getFullYear()} Jet Lub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}