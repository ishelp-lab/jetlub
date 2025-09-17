import Button from "@/components/ui/Button";

export const Location = () => {
  const contactInfo = {
    address: 'Av. Floriano Peixoto, 1591 - Nossa Sra. Aparecida, Uberlândia - MG, 38400-700',
    phone: '+55 (34) 3045-4595'
  }

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-background" id="localizacao">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Onde estamos localizados?
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre a Jet Lub em Uberlândia, MG
          </p>
        </div>
        <div className="bg-card rounded-3xl shadow-xl p-8 flex flex-col lg:flex-row items-center animate-in slide-in-from-bottom-6 duration-700 hover:scale-[1.02] transition-transform">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <svg
                  className="w-4 h-5 text-primary"
                  viewBox="0 0 15 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.42578 20C10.4297 17.4922 15 11.4141 15 8C15 3.85938 11.6406 0.5 7.5 0.5C3.35938 0.5 0 3.85938 0 8C0 11.4141 4.57031 17.4922 6.57422 20C7.05469 20.5977 7.94531 20.5977 8.42578 20ZM7.5 5.5C8.16304 5.5 8.79893 5.76339 9.26777 6.23223C9.73661 6.70107 10 7.33696 10 8C10 8.66304 9.73661 9.29893 9.26777 9.76777C8.79893 10.2366 8.16304 10.5 7.5 10.5C6.83696 10.5 6.20107 10.2366 5.73223 9.76777C5.26339 9.29893 5 8.66304 5 8C5 7.33696 5.26339 6.70107 5.73223 6.23223C6.20107 5.76339 6.83696 5.5 7.5 5.5Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-foreground font-medium">
                  {contactInfo.address}
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.44141 1.46084C6.14062 0.734279 5.34766 0.34756 4.58984 0.554592L1.15234 1.49209C0.472656 1.67959 0 2.29678 0 2.9999C0 12.664 7.83594 20.4999 17.5 20.4999C18.2031 20.4999 18.8203 20.0272 19.0078 19.3476L19.9453 15.9101C20.1523 15.1522 19.7656 14.3593 19.0391 14.0585L15.2891 12.496C14.6523 12.2304 13.9141 12.414 13.4805 12.9491L11.9023 14.8749C9.15234 13.5741 6.92578 11.3476 5.625 8.59756L7.55078 7.02334C8.08594 6.58584 8.26953 5.85147 8.00391 5.21475L6.44141 1.46475V1.46084Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-foreground font-medium">{contactInfo.phone}</p>
              </div>
              <Button color="primary" size="lg" className="text-sm" onClick={() => {
                document.querySelector('#contato')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                Agende Agora
              </Button>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.2123456789!2d-48.2812345!3d-18.9186669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4448b6b32b7a1%3A0x123456789!2sAv.%20Floriano%20Peixoto%2C%201591%20-%20Nossa%20Sra.%20Aparecida%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038400-700!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-300 hover:scale-[1.02]"
                  title="Localização Jet Lub"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}