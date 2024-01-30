import React from 'react'
import Restaurant from "../images/restauranfood.jpg"
import RestaurantChefB from "../images/restaurant_chef_b.jpg"
import RestaurantChefA from "../images/restauranfood2.jpg"

function SmallCard() {
  return (
    <section className="cards | bg-gray padding-block-900">
        <div className="container">
            <div className="even-columns">
                <article className="card-picture">
                    <img src={Restaurant} alt="Greek Salad" />
                </article>
                <article className="card-picture">
                    <img src={RestaurantChefB} alt="Greek Salad" />
                </article>
                <article className="card-picture">
                    <img src={RestaurantChefA} alt="Greek Salad" />
                </article>
            </div>
        </div>
    </section>
  )
}

export default SmallCard