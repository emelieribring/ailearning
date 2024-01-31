import React from 'react';
import './navbar.css';
import logo from '../../Images/atom-logotype-no-bg.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
    </div>
  )
}
