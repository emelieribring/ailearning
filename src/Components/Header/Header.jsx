import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <h1 className='title'>Din virtuella assistans-guide</h1>
      <a  className='startBtn' href="#kursStart">
        Starta kursen
      </a>
    </div>
  )
}
