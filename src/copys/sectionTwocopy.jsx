import React, { useState } from 'react';
import './sectionTwo.css';
import chat from '../../Images/chatgpt.png';
import 'animate.css';

export default function SectionTwo() {

    const [showBoxOne, setShowBoxOne] = useState(false);
    const [showBoxTwo, setShowBoxTwo] = useState(false);
    const [showBoxThree, setShowBoxThree] = useState(false);
    const [showBoxFour, setShowBoxFour] = useState(false);

    const [plusClicked, setPlusClicked] = useState(false);
    const [plusClickedTwo, setPlusClickedTwo] = useState(false);
    const [plusClickedThree, setPlusClickedThree] = useState(false);
    const [plusClickedFour, setPlusClickedFour] = useState(false);


    const plusClick = () => {
        setShowBoxOne(!showBoxOne); 
        setPlusClicked(!plusClicked);
    };
    
    const plusClickTwo = () => {
        setShowBoxTwo(!showBoxTwo); 
        setPlusClickedTwo(!plusClickedTwo);
    };

    const plusClickThree = () => {
        setShowBoxThree(!showBoxThree); 
        setPlusClickedThree(!plusClickedThree);
    };

    const plusClickFour = () => {
        setShowBoxFour(!showBoxFour);
        setPlusClickedFour(!plusClickedFour);
    };


  return (
    <div className='section-two'>
        <div className='left'>
            <p className='chatGptTitle'>Promts</p>
            <p className='chatGptText'>För att maximera resultaten med ChatGPT är det viktigt att behärska konsten att formulera prompts. 
            Det utgör en central del av att dra nytta av olika AI-tjänster. 
            Effektiv kommunikation med chatten spelar en avgörande roll. 
            Klicka på plusen här brevid för att få några användbara tips att beakta.</p>
        </div>
        <div className="right">
            <img className='chat' src={chat} alt=""></img>
            <div className={`plus-one ${plusClicked ? 'clicked' : ''}`} onClick={plusClick}>+</div>
            {showBoxOne && (
                <div className='popup-box-one animate__animated animate__jackInTheBox'>
                {<p><strong>Var specifik och tydlig:</strong>
                Formulera dina frågor eller instruktioner på ett klart och precist sätt. 
                Ju tydligare din prompt är, desto bättre kommer ChatGPT att förstå och svara på ditt ärende.
                Undvik vaga eller tvetydiga formuleringar. Om du vill ha detaljerad information, specificera detta i din prompt.</p>}
                </div>
            )}
            <div className={`plus-two ${plusClickedTwo ? 'clicked' : ''}`}  onClick={plusClickTwo} >+</div>
            {showBoxTwo && (
                <div className='popup-box-two animate__animated animate__jackInTheBox'>
                {<p><strong>Använd kontext och detaljer:</strong>
                Tillhandahåll nödvändig kontext för att hjälpa ChatGPT att förstå sammanhanget bakom din fråga eller instruktion.
                Inkludera relevanta detaljer som kan vägleda modellen mot att producera svar som matchar dina förväntningar.</p>}
                </div>
            )}
            <div className={`plus-three ${plusClickedThree ? 'clicked' : ''}`}  onClick={plusClickThree} >+</div>
            {showBoxThree && (
                <div className='popup-box-three animate__animated animate__jackInTheBox'>
                {<p><strong>Testa och iterera:</strong>
                Om du inte får önskade svar från ChatGPT, experimentera med olika formuleringar och strukturer i dina prompts.
                Testa gradvis för att se hur små förändringar i frågor eller instruktioner kan påverka svaren. Ibland kan små justeringar göra stor skillnad.</p>}
                </div>
            )}
            <div className={`plus-four ${plusClickedFour ? 'clicked' : ''}`}  onClick={plusClickFour} >+</div>
            {showBoxFour && (
                <div className='popup-box-four animate__animated animate__jackInTheBox'>
                {<p><strong>Exempel:</strong><br />
                <strong>Dåligt: </strong>"Berätta om staden."<br /><br />
                <strong>Bättre:</strong>"Kan du ge mig information om kulturen, sevärdheterna och maten i staden Paris?"<br /><br />

                Genom att vara specifik, ge kontext och testa olika formuleringar kan du förbättra sannolikheten 
                att få önskade och relevanta svar från ChatGPT.</p>}
                </div>
            )}
        </div>
    </div>
  )
}
