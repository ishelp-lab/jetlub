import { FAQ } from "@/components/Sections/FAQ"
import { About, Benefits, CTA, Hero, Location, Services, Testimonials, Video } from "../components/Sections"

export const Index = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Benefits />
            <Video />
            <Testimonials />
            <Location />
            <FAQ />
            <CTA />
        </div>
    )
}