import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts'
import { Header } from './components/Sections/Header'
import { Footer } from './components/Sections/Footer'
import { Index } from './pages/Index'
// import { WhatsappFloatIcon } from './components/icons/Whatsapp' // reativar depois

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        {/* <WhatsappFloatIcon /> */}
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
