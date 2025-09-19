import { Hero } from '@/components/Sections/Hero'
import { Services } from '@/components/Sections/Services'
import { Benefits } from '@/components/Sections/Benefits'
import { About } from '@/components/Sections/About'
import { Video } from '@/components/Sections/Video'
import { Testimonials } from '@/components/Sections/Testimonials'
import { Location } from '@/components/Sections/Location'
import { CTA } from '@/components/Sections/CTA'

export const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Video />
      <Testimonials />
      <Location />
      <CTA />
    </>
  )
}
