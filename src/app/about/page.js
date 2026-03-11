import AboutCompany from '@/Component/about/AboutCompany'
import AboutFounder from '@/Component/about/AboutFounder'
import AboutHero from '@/Component/about/AboutHero'
import OurStageProcess from '@/Component/about/OurStageProcess'
import ContactFormSection from '@/Component/ContactFormSection'
import FAQSection from '@/Component/FAQSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <AboutHero/>
      <AboutCompany/>
      <AboutFounder/>
      <OurStageProcess/>
      <FAQSection/>
      <ContactFormSection/>
    </div>
  )
}
