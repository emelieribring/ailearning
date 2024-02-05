import React, { useEffect } from 'react';
import './home.css';

import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';

import SectionOne from '../../Components/SectionOne/SectionOne';
import QuestionStart from '../../Components/QuestionStart/QuestionStart';
import ChatGPT from '../../Components/ChatGPT/ChatGPT';
import PromptEngineering from '../../Components/PromptEngineering/PromptEngineering';
import QuestionWell from '../../Components/QuestionWell/QuestionWell';
import EDPuzzle from '../../Components/EDPuzzle/EDPuzzle';
import GammaApp from '../../Components/GammaApp/GammaApp';
import GoblinTools from '../../Components/GoblinTools/GoblinTools';
import Footer from '../../Components/Footer/Footer';

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
            <QuestionStart/>
            <ChatGPT/>
            <PromptEngineering/>
            <QuestionWell/>
            <EDPuzzle/>
            <GammaApp/>
            <GoblinTools/>
            <SectionOne/>
            <Footer/>
    </div>
  )
}
