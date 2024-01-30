import React, { useState } from 'react'
import Logo from '../images/littlelemon_logo.png'
import { Link } from 'react-router-dom'
import CloseIcon from '../images/close.svg'
import HamburgerIcon from '../images/hamburger.svg'


function Nav() {
  // const [menuOpen, setMenuOpen] = useState(false)

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen)
  // }


  const [isVisible, setIsVisible] = useState(false);

  const toggleNav = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="site-header padding-block-900">
      <div className="container">
              <div className="site-header__inner">
            <Link to="/">
              <img className="logo" src={Logo} alt="Little Lemon" />
            </Link>

            <button onClick={toggleNav} className="mobile-nav-toggle" aria-expanded={isVisible ? 'true' : 'false'}>
              <img className="icon-hamburger" src={isVisible ? CloseIcon : HamburgerIcon} alt="" aria-hidden="true" />
              <img className="icon-close" src={CloseIcon} alt="" aria-hidden="true" />
              <span className="sr-only">Menu</span>
            </button>

            <nav className="primary-navigation" data-visible={isVisible ? 'true' : 'false'}>
                <ul className="nav flex-group">
                    <li><Link to="/" className="active" aria-current="page">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/online-menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default Nav