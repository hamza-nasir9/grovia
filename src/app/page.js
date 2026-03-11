import ContactPage from '@/Component/Contact'
// import ContactFormSection from '@/Component/ContactFormSection'
import FAQSection from '@/Component/FAQSection'
import Footer from '@/Component/Footer'
import Grovia from '@/Component/Grovia'
import Hero from '@/Component/Hero'
import ImportantClients from '@/Component/ImportantClients'
import OurSpecialities from '@/Component/OurSpecialities'
import ServicesSection from '@/Component/Services/Services'
import GroviaServices from '@/Component/Services/ServicesSection'
import TestimonialsPage from '@/Component/TestimonialsPage'

import React from 'react'

export default function page() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Grovia />
      <TestimonialsPage />
      <ImportantClients />
      <GroviaServices />
      <OurSpecialities />
      <FAQSection/>
      <ContactPage/>
    </div>
  )
}
