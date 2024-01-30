import React from 'react'
import logo_footer from '../images/small_logo.png'
function Footer() {
  return (
    <section className="footer-bg">
        <div className="footer wrapper">
            <div className="footer-row">
                <img src={logo_footer} alt="Little Lemon Restaurant" />
                <p className="footer-description">
                    We are a family owned of Mediterranean restaurant focused on traditional recipes served with a modern twist.
                </p>
            </div>
            <div className="footer-row">
                <h4 className="footer-title">Important Links</h4>
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div className="footer-row">
                <h4 className="footer-title">Important Links</h4>
                <ul className="footer-links">
                    <li>Address: <br /> 123 Chigago street 345</li>
                    <li>Phone: <br /> +1 2345 234355</li>
                    <li>Email: <br /> Support@littlelemonrestaurant.com</li>
                </ul>
            </div>
            <div className="footer-row">
                <h4 className="footer-title">Social Media Links</h4>
                <ul className="footer-links">
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.twitter.com">Twitter</a></li>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer