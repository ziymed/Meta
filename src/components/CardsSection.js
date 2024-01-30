import React from 'react'
import Card from './Card'

function CardsSection() {
  return (
    <section className="cards | bg-gray padding-block-900">
        <div className="container">
            <div className="even-columns">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>
  )
}

export default CardsSection