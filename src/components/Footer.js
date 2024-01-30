import React from 'react'
import logo_footer from '../images/footer_logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className="footer | bg-black text-white padding-block-900">
        <div className="container">
            <div className="even-columns">
                <div className="footer__row">
                    <img src={logo_footer} alt="Little Lemon Restaurant" className="footer__logo" />
                    <p className="footer__description | text-gray">
                        We are a family owned of Mediterranean restaurant focused on traditional recipes served with a modern twist.
                    </p>
                </div>
                <div className="footer__row">
                    <h4 className="footer__title | text-gray fs-400 ff-sans-serif uppercase">Important Links</h4>
                    <ul className="footer__nav | text-gray fs-600 ff-sans-serif">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order-online">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div className="footer__row">
                    <h4 className="footer__title | text-gray fs-400 ff-sans-serif uppercase">Important Links</h4>
                    <ul className="footer__nav | text-gray fs-600 ff-sans-serif">
                        <li>Address: <br /> 123 Chigago street 345</li>
                        <li>Phone: <br /> +1 2345 234355</li>
                        <li>Email: <br /> Support@littlelemonrestaurant.com</li>
                    </ul>
                </div>
                <div className="footer__row">
                    <h4 className="footer__title | text-gray fs-400 ff-sans-serif uppercase">Social Media Links</h4>
                    <ul className="footer__nav | text-gray fs-600 ff-sans-serif">
                        <li><Link to="https://www.facebook.com">Facebook</Link></li>
                        <li><Link to="https://www.twitter.com">Twitter</Link></li>
                        <li><Link to="https://www.instagram.com">Instagram</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyrights | text-gray fs-200 ff-sans-serif vertical-align-center"><p>All rights Reserved © Little Lemon Restaurant </p></div>
        </div>
    </section>
  )
}

export default Footer