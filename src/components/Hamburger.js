import React from 'react'
import CloseIcon from '../images/close.svg'
import HamburgerIcon from '../images/hamburger.svg'

function Hamburger() {
  return (
    <>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" >
            <img className="icon-hamburger" src={HamburgerIcon} alt="" aria-hidden="true" />
            <img className="icon-close" src={CloseIcon} alt="" aria-hidden="true" />
            <span className="sr-only">Menu</span>
        </button>
    </>
  )
}

export default Hamburger