import React from 'react';
import Logo from '../assets/Logo.svg'
import Nav from './Nav';

function Header() {
  return (
    <header className='header'>
        <img src={Logo} alt='Little Lemon Restaurant Logo' />
        <Nav />
    </header>
  )
}

export default Header;