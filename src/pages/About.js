import React from 'react'
import Mario_and_Adrian_A from '../images/Mario_&_Adrian_A.jpg'
import Mario_and_Adrian_B from '../images/Mario_&_Adrian_B.jpg'

function About() {
  return (
    <section className="about | bg-gray padding-block-900">
        <div className="container">
            <div className="even-columns">
                <div className="flow">
                    <h1 className="ff-serif fs-900 text-green">Little Lemon</h1>
                    <h2 className="ff-serif fs-800 text-black uppercase">Chicago</h2>
                    <p className="ff-sans-serif fs-500 text-black">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
                </div>
                <div className="about__image">
                    <img src={Mario_and_Adrian_A} alt="" />
                    <img src={Mario_and_Adrian_B} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About