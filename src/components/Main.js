import React from 'react'
import SpecialSection from './SpecialSection'
import CardsSection from './CardsSection'
import About from '../pages/About'
import CallToActionSection from './CallToActionSection'
import CustomersSaySection from './CustomersSaySection'

function Main() {
  return (
    <>
      <CallToActionSection />
      <SpecialSection />
      <CardsSection />
      <CustomersSaySection />
      <About />
    </>
  )
}

export default Main