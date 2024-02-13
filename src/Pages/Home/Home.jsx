import React, { useEffect } from 'react';
import './home.css';

import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';

import SectionOne from '../../Components/SectionOne/SectionOne';
import QuestionStart from '../../Components/QuestionStart/QuestionStart';
import ChatGPT from '../../Components/ChatGPT/ChatGPT';
import PromptEngineering from '../../Components/PromptEngineering/PromptEngineering';
import Heads from '../../Components/Heads/Heads';
import Footer from '../../Components/Footer/Footer';
import AiTools from '../../Components/AiTools/AiTools.jsx';

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
            <AiTools/>
            <Heads/>
            <SectionOne/>
            <Footer/>
    </div>
  )
}
