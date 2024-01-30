import React from 'react'
import { Link } from 'react-router-dom'

function BookingForm() {
  return (
    <section className="hero | bg-green padding-block-900 text-gray">
        <div className="container">
            <div className="even-columns">
                <div className="flow">
                    <h1 className="ff-serif fs-900 text-yellow">Reservations</h1>
                    <form id="reservationForm">
                        <div className="form__element">
                            <div className="form__item">
                                <label for="indoor" className="text-gray fs-400 ff-sans-serif">
                                    <input type="radio" id="indoor" name="seating" value="indoor" checked /> Indoor Seating
                                </label>
                            </div>
                            <div className="form__item">
                                <label for="outdoor" className="text-gray fs-400 ff-sans-serif">
                                    <input type="radio" id="outdoor" name="seating" value="outdoor" /> Outdoor Seating
                                </label>
                            </div>
                        </div>


                        <div className="form__element">
                            <div className="form__item">
                                <label for="date" className="text-gray fs-400 ff-sans-serif">Date:</label>
                                <input type="date" id="date" name="date" />
                            </div>
                            <div className="form__item">
                                <label for="time" className="text-gray fs-400 ff-sans-serif">Time:</label>
                                <input type="time" id="time" name="time" />
                            </div>

                        </div>

                        <div className="form__element">
                            <div className="form__item">
                                <label for="occasion" className="text-gray fs-400 ff-sans-serif">Occasion:</label>
                                <select id="occasion" name="occasion">
                                    <option value="birthday">Birthday</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="anniversary">Anniversary</option>
                                </select>
                            </div>
                            <div className="form__item">
                                <label for="diners" className="text-gray fs-400 ff-sans-serif">Number of Diners:</label>
                                <input type="number" id="diners" name="diners" min="1" max="10" value="1" />
                            </div>
                        </div>

                        <div className="form__element">
                            <div className="form__item">
                                <label for="firstName" className="text-gray fs-400 ff-sans-serif">First Name:</label>
                                <input type="text" id="firstName" name="firstName" placeholder="Your First Name" value="" required />
                            </div>
                            <div className="form__item">
                                <label for="lastName" className="text-gray fs-400 ff-sans-serif">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" placeholder="Your ast Name" value="" required />
                            </div>
                        </div>

                        <div className="form__element">
                            <div className="form__item">
                                <label for="email" className="form__label">Your Email Address:</label>
                                <input type="email" className="form__input" id="email" name="email" placeholder="Your Email Address" value="" required />
                            </div>
                            <div className="form__item">
                                <label for="phone"  className="text-gray fs-400 ff-sans-serif">Your Phone Number:</label>
                                <input type="tel" className="form__input" id="phone" name="phone" placeholder="Phone" value="" required />
                            </div>
                        </div>

                        <div className="form__element">
                            <div className="form__item">
                                <label for="specialRequirement" className="text-gray fs-400 ff-sans-serif">Special Requirement:</label>
                                <textarea className="" rows="5" aria-label="With textarea"></textarea>
                            </div>
                            <div className="form__item vertical-align-center padding-block-900">
                                <label for="agrees" className="text-gray fs-400 ff-sans-serif">
                                    <input type="checkbox" id="agrees" name="agrees" /> You agree to our friendly <Link to="/privacy-policy" className="text-gray">privacy policy</Link>
                                </label>
                            </div>
                        </div>

                        <div className="vertical-align-center">
                            <Link to="/confirmation" className="button" data-type="primary">Reserve a table</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookingForm