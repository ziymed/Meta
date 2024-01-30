import React from 'react'
import Hero_Image from "../images/restauranfood.jpg"
import Chicago from './Chicago'
import { Link } from 'react-router-dom'

function CallToActionSection() {
  return (
    <section className="hero | bg-green padding-block-900">
        <div className="container">
            <div className="even-columns">
                <div className="flow">
                    <Chicago />
                    <div className="flex-group">
                        <Link to="/reservations" className="button" data-type="primary">Reserve a table</Link>
                    </div>
                </div>
                <div className="justify-self-end">
                    <img src={Hero_Image} alt="Little Lemon" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallToActionSection