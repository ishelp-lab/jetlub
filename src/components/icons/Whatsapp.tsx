export const WhatsappFloatIcon = () => {
  const phone = '5534999999999' // ajuste
  const msg = encodeURIComponent('Olá! Gostaria de agendar uma troca de óleo.')
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        background: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(0,0,0,.2)',
        zIndex: 50,
        fontWeight: 700,
        textDecoration: 'none',
      }}
      aria-label="Abrir WhatsApp"
    >
      WA
    </a>
  )
}
