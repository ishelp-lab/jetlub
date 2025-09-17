import { useTheme } from '@/hooks/useTheme'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const WhatsappFloatIcon = () => {
    const { theme } = useTheme()
    return (
        <FloatingWhatsApp
          phoneNumber="+553430454595"
          accountName="Jet Lub"
          chatMessage="Olá! 👋 Como posso ajudá-lo hoje?"
          statusMessage="Normalmente responde em 1 hora"
          placeholder="Digite sua mensagem..."
          allowClickAway={true}
          allowEsc={true}
          avatar={theme === 'dark' ? '/logo-jet-lub-dark.png' : '/logo-jet-lub-light.png'} 
          darkMode={theme === 'dark'}
          notification={true}
          notificationDelay={60000} 
          notificationSound={true}
        />
      )
}