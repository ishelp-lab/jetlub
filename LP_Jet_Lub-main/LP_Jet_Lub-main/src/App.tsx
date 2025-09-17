import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WhatsappFloatIcon } from "./components/icons/Whatsapp";
import { Pallete } from "./components/Pallete";
import { Footer } from "./components/Sections/Footer";
import { Header } from "./components/Sections/Header";
import { ThemeProvider } from "./contexts";
import { Index } from "./pages/Index";

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-black">
          <Header />
          <WhatsappFloatIcon />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pallete" element={<Pallete />} />
            <Route path="*" element={<Index />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}


