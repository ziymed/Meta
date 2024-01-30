import React from 'react'
import User_1 from '../images/user1.jpg'
import User_2 from '../images/user2.jpg'
import User_3 from '../images/user3.jpg'
import star from '../images/star.jpg'

function CustomersSaySection() {
  return (
    <section className="testimonials | bg-white text-black padding-block-900">
        <div className="container padding-block-500">
            <div className="vertical-align-center">
                <h2 className="text-black fs-700">What people says about us!</h2>
            </div>
            <div className="even-columns padding-block-900">
                <article className="testimonial">
                    <div className="testimonial__heading vertical-align-center">
                        <picture className="testimonial__image">
                            <img src={User_1} alt="" />
                        </picture>
                        <div className="testimonial__title">
                            <h5 className="text-black fs-400">Micheal Smith</h5>
                            <p className="text-green fs-300">April 14, 2024</p>
                        </div>
                    </div>
                    <div className="testimonial__body">
                        <p className="testimonial__content  vertical-align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni ea dolorem asperiores natus possimus incidunt amet deleniti corrupti. Enim, earum fugiat.</p>
                    </div>
                    <div className="vertical-align-center">
                        <ul className="testimonial__rating ">
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                        </ul>
                    </div>
                </article>
                <article className="testimonial">
                    <div className="testimonial__heading vertical-align-center">
                        <picture className="testimonial__image">
                            <img src={User_2} alt="user 2" />
                        </picture>
                        <div className="testimonial__title">
                            <h5 className="text-black fs-400">Micheal Smith</h5>
                            <p className="text-green fs-300">April 14, 2024</p>
                        </div>
                    </div>
                    <div className="testimonial__body">
                        <p className="testimonial__content  vertical-align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni ea dolorem asperiores natus possimus incidunt amet deleniti corrupti. Enim, earum fugiat.</p>
                    </div>
                    <div className="vertical-align-center">
                        <ul className="testimonial__rating ">
                        <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                        </ul>
                    </div>
                </article>
                <article className="testimonial">
                    <div className="testimonial__heading vertical-align-center">
                        <picture className="testimonial__image">
                            <img src={User_3} alt="user 3" />
                        </picture>
                        <div className="testimonial__title">
                            <h5 className="text-black fs-400">Micheal Smith</h5>
                            <p className="text-green fs-300">April 14, 2024</p>
                        </div>
                    </div>
                    <div className="testimonial__body">
                        <p className="testimonial__content  vertical-align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni ea dolorem asperiores natus possimus incidunt amet deleniti corrupti. Enim, earum fugiat.</p>
                    </div>
                    <div className="vertical-align-center">
                        <ul className="testimonial__rating ">
                        <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                        </ul>
                    </div>
                </article>

            </div>
        </div>
    </section>
  )
}

export default CustomersSaySection