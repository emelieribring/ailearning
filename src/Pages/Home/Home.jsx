import React, { useEffect } from 'react';
import './home.css';
import Navbar from '../../Components/Navbar/Navbar';
import SectionOne from '../../Components/SectionOne/SectionOne';
import Header from '../../Components/Header/Header';
import SectionTwo from '../../Components/SectionTwo/SectionTwo';
import SectionThree from '../../Components/SectionThree/SectionThree';

export default function Home() {
    useEffect(() => {
        const handleScroll = () => {
          const scrollValue = window.scrollY;
          const background = document.querySelector('.background');
    
          const speed = 3;
          const yPos = -scrollValue / speed + 'px';
    
          background.style.transform = 'translateY(' + yPos + ')';
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 
    

  return (
    <div className='home'>
            <Navbar/>
            <Header/>
            <div className="background-wrapper">
                <div className="background"></div>
            </div>
            <SectionOne/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionOne/>
            <SectionOne/>
            <SectionOne/>
    </div>
  )
}
