import React from 'react'
import Logo from '../images/Logo.svg'

function Nav() {
  return (
    <>
      <nav className="navbar wrapper">
          <a href="/" className="logo">
              <img src={Logo} alt="Little Lemon Reataurant" />
          </a>
          <ul className="nav-links">
              <li className="nav-item"><a href="/">Home</a></li>
              <li className="nav-item"><a href="/about">About</a></li>
              <li className="nav-item"><a href="/menu">Menu</a></li>
              <li className="nav-item"><a href="/reservations">Reservations</a></li>
              <li className="nav-item"><a href="/order-online">Order Online</a></li>
              <li className="nav-item"><a href="/login">Login</a></li>
          </ul>
      </nav>
      <div className="burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
              <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
          </svg>
      </div>
    </>
  )
}

export default Nav