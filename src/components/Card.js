import React from 'react'
import dessert from '../images/dessert.jpg'
import OrderNow from './OrderNow'

function Card() {
  return (
    <article className="card | bg-white text-black">
        <img src={dessert} alt="dessert" />
        <div className="padding-inline-400 padding-block-400">
            <header className="card__title">
                <h3 className="fs-600 text-green ff-serif uppercase">Dessert</h3>
                <span className="fs-600 text-black ff-serif">$6.99</span>
            </header>
            <p className="fs-300 ff-sans-serif padding-block-600">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons</p>
            <OrderNow />
        </div>
    </article>
  )
}

export default Card