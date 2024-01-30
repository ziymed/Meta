import React from 'react'
import bruchetta from '../images/bruchetta.svg'
import desert from '../images/desert.jpg'
import greek_salad from '../images/greek_salad.jpg'
import delivery from '../images/delivery.svg'

function Cards() {
  return (
    <section className="cards wrapper">
        <article className="card ">
            <img src={bruchetta} alt="Greek Salad" className="card-image" />
            <div className="card-body">
                <h1 className="card-title">Greek Salad</h1>
                <p className="card-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese. gernished with crunchy garlic and rosemary croutons.</p>
                <button className="card-btn-order-a-delivery">
                    <span className="btn-text">Order a delivery</span>
                    <img className="btn-icon" src={delivery} alt="delivery" />
                </button>
            </div>
        </article>
        <article className="card">
            <img src={desert} alt="Greek Salad"  className="card-image" />
            <div className="card-body">
                <h1 className="card-title">Greek Salad</h1>
                <p className="card-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese. gernished with crunchy garlic and rosemary croutons.</p>
                <button className="card-btn-order-a-delivery">
                    <span className="btn-text">Order a delivery</span>
                    <img className="btn-icon" src={delivery} alt="delivery" />
                </button>
            </div>
        </article>
        <article className="card">
            <img src={greek_salad} alt="Greek Salad"  className="card-image" />
            <div className="card-body">
                <h1 className="card-title">Greek Salad</h1>
                <p className="card-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese. gernished with crunchy garlic and rosemary croutons.</p>
                <button className="card-btn-order-a-delivery">
                    <span className="btn-text">Order a delivery</span>
                    <img className="btn-icon" src={delivery} alt="delivery" />
                </button>
            </div>
        </article>
    </section>
  )
}

export default Cards