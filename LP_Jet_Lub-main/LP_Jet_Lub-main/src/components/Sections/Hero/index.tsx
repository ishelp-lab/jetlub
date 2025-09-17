import heroBackground from "@/assets/hero-background.svg";
import Button from "@/components/ui/Button";

export const Hero = () => {
    return (
        <section id="hero" className="relative h-[650px] bg-gray overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Auto service background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent"></div>
        </div>

        <div className="relative max-w-screen-xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-foreground">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              <span className="text-primary-foreground  font-bold">Jet Lub</span>
              {' '}
              <span className="text-primary-foreground  font-bold">Super Troca de Óleo</span>
            </h1>
            <p className="text-2xl font-medium mb-8 text-primary-foreground ">
              Cuide do seu carro com a Jet Lub. Nós cuidamos do óleo, você cuida
              do volante!
            </p>

            <div className="flex items-center gap-4 mb-6">
              <Button color="primary" size="lg" className="text-lg" onClick={() => {
                document.querySelector('#contato')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                Agende agora
              </Button>

              <div className="flex items-center gap-3 text-white">
                <svg
                  className="w-6 h-5"
                  viewBox="0 0 23 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.53125 0.25C6.27717 0.25 6.99254 0.546316 7.51999 1.07376C8.04743 1.60121 8.34375 2.31658 8.34375 3.0625C8.34375 3.80842 8.04743 4.52379 7.51999 5.05124C6.99254 5.57868 6.27717 5.875 5.53125 5.875C4.78533 5.875 4.06996 5.57868 3.54251 5.05124C3.01507 4.52379 2.71875 3.80842 2.71875 3.0625C2.71875 2.31658 3.01507 1.60121 3.54251 1.07376C4.06996 0.546316 4.78533 0.25 5.53125 0.25ZM18.4688 0.25C19.2147 0.25 19.93 0.546316 20.4575 1.07376C20.9849 1.60121 21.2812 2.31658 21.2812 3.0625C21.2812 3.80842 20.9849 4.52379 20.4575 5.05124C19.93 5.57868 19.2147 5.875 18.4688 5.875C17.7228 5.875 17.0075 5.57868 16.48 5.05124C15.9526 4.52379 15.6562 3.80842 15.6562 3.0625C15.6562 2.31658 15.9526 1.60121 16.48 1.07376C17.0075 0.546316 17.7228 0.25 18.4688 0.25ZM0.46875 10.7512C0.46875 8.68047 2.14922 7 4.21992 7H5.72109C6.28008 7 6.81094 7.12305 7.28906 7.34102C7.24336 7.59414 7.22227 7.85781 7.22227 8.125C7.22227 9.46797 7.81289 10.6738 8.74453 11.5C8.7375 11.5 8.73047 11.5 8.71992 11.5H1.21758C0.80625 11.5 0.46875 11.1625 0.46875 10.7512ZM14.7176 11.5C14.7105 11.5 14.7035 11.5 14.693 11.5C15.6281 10.6738 16.2152 9.46797 16.2152 8.125C16.2152 7.85781 16.1906 7.59766 16.1484 7.34102C16.6266 7.11953 17.1574 7 17.7164 7H19.2176C21.2883 7 22.9688 8.68047 22.9688 10.7512C22.9688 11.166 22.6313 11.5 22.2199 11.5H14.7176ZM8.34375 8.125C8.34375 7.22989 8.69933 6.37145 9.33226 5.73851C9.9652 5.10558 10.8236 4.75 11.7188 4.75C12.6139 4.75 13.4723 5.10558 14.1052 5.73851C14.7382 6.37145 15.0938 7.22989 15.0938 8.125C15.0938 9.02011 14.7382 9.87855 14.1052 10.5115C13.4723 11.1444 12.6139 11.5 11.7188 11.5C10.8236 11.5 9.9652 11.1444 9.33226 10.5115C8.69933 9.87855 8.34375 9.02011 8.34375 8.125ZM4.96875 17.3113C4.96875 14.7238 7.06758 12.625 9.65508 12.625H13.7824C16.3699 12.625 18.4688 14.7238 18.4688 17.3113C18.4688 17.8281 18.0504 18.25 17.5301 18.25H5.90742C5.39062 18.25 4.96875 17.8316 4.96875 17.3113Z"
                    fill="white"
                  />
                </svg>
                <p className="text-sm">
                  +2.000 pessoas em Uberlândia já confiaram em nossos serviços.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}