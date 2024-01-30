import React from 'react'
import Hero_Image from "../images/restauranfood.jpg"

function Hero() {
  return (
    <section className="hero-section">
        <div className="hero wrapper">
            <div className="hero-text-container">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-location">Chicago</h2>
                <p className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href="/reserve-a-table.html" className="hero-btn-reserve">Reserve a table</a>
            </div>
            <div className="hero-image-container">
                <img className="hero-image" src={Hero_Image} alt="Little Lemon Restaurant" />
            </div>
        </div>
    </section>
  )
}

export default Hero