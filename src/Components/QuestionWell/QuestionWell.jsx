import React, { useState } from 'react';
import './questionWell.css';
import AiTools from '../AiTools/AiTools.jsx';
import firstQuestionWellImg from '../../Images/questionWellFirstImg.jpg';
import questionWellImg from '../../Images/questionWell1.jpg';
import guestionwellThirdImg from '../../Images/questionwellimgthree.jpg';
import questionwellimgfour from '../../Images/questionwellimgfour.jpg';

const tipsData = [
  {
    tipText: 'Fördel',
    answerText: 'En fördel med QuestionWell är tidsbesparingen det medför. Genom att generera frågor automatiskt kan man snabbt skapa kvalitetskontroller utan att manuellt behöva formulera varje fråga. Detta ger mer tid för andra viktiga undervisningsuppgifter.',
  },
  {
    tipText: 'Nackdel',
    answerText: 'En nackdel är dock att vissa funktioner, som att skapa ifyllnadsfrågor, korta svarsfrågor och utökade responsfrågor, endast är tillgängliga i den betalda versionen av verktyget. Dessutom kan frågorna som genereras i översatt språk vara annorlunda, vilket kan orsaka problem med konsistens och exakthet i frågeformuleringarna.',
  },
  {
    tipText: 'Tips',
    answerText: 'Anpassa Frågorna efter Ditt Syfte: Även om QuestionWell kan generera ett brett spektrum av frågor automatiskt, bör du anpassa dessa frågor till ditt specifika syfte. Se till att frågorna är relevanta för det material eller ämne du fokuserar på. Det kan innebära att justera frågornas svårighetsgrad eller kontext för att bättre passa din målgrupp.',
  },
  {
    tipText: 'Tips',
    answerText: 'Kvalitetskontrollera och Granska Frågorna: Eftersom AI-genererade frågor kan variera i kvalitet, är det viktigt att du granskar dem för att säkerställa deras relevans och noggrannhet. Korrigera eventuella felaktigheter och se till att frågorna är formulerade på ett klart och begripligt sätt för din målgrupp.',
  },
  {
    tipText: 'Tips',
    answerText: 'Komplettera med Manuell Input: Använd QuestionWell som ett komplement till din egen expertis och kreativitet. Medan verktyget kan spara tid och generera ett stort antal frågor, bör det inte vara den enda källan för dina frågor. Att personligt anpassa och lägga till egna frågor kan ge en mer skräddarsydd och engagerande upplevelse.',
  }
];

export default function QuestionWell() {
  const [showTools, setShowTools] = useState(true);
  const [showAiTools, setShowAiTools] = useState(false);
  const [tipStates, setTipStates] = useState(tipsData.map(() => false));

  const handleBackBtn = () => {
    setShowAiTools(true);
    setShowTools(false);
  };

  const handleTipClick = (index) => {
    setTipStates((prevStates) => {
      const newTipStates = [...prevStates];
      newTipStates[index] = !newTipStates[index];
      return newTipStates;
    });
  };

  const getTipText = (index) => {
    return tipStates[index] ? tipsData[index].answerText : tipsData[index].tipText;
  };

  return (
    <>
    {showTools && (
    <div className={`container ${showTools || showAiTools ? 'container-bg' : ''}`}>
        <div className='question-wells-box'>
          <div className='btnDiv'>
              <button onClick={handleBackBtn} className='goBackBtn'>⟵</button>
          </div>
          <div className='question-well-about'>
            <h1 className='question-well-about-title'>Questionwell</h1>
            <p className='question-well-about-text'>Behöver du i ditt arbete enkelt och effektivt generera frågor utifrån en pdf-fil, 
            artikel eller annan längre text? Questionwell är ett AI-verktyg med förmågan att generera frågor i ett flertal olika format,
            samt sortera in dessa i olika kategorier. Perfekt för t.ex. lärare som vill utforma quiz. 
            </p>
            <img className='questionWellImg' src={firstQuestionWellImg} alt="questionWellImg" />
          </div>
          <div className="question-well-tips">
            {tipsData.map((tip, index) => (
              <div key={index} className={`tips-box ${tipStates[index] ? 'expanded' : ''}`}>
                <p className='tip-text'>{getTipText(index)}</p>
                <span
                  onClick={() => handleTipClick(index)}
                  className={`tip-arrow ${tipStates[index] ? 'tip-arrow-up' : ''}`}
                >
                  <p>➤</p>
                </span>
                {tipStates[index] && (
                  <div className="answer-div">
                    <p>{tip.answerText}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='question-well-howTo'>
          <div className='questionwell-how-to-text'>
            <p>Efter att du loggat in och godkänt användarvillkoren, möts du av dashboardsen du ser på bilden nedan. 
              Som du kan se finns det flera funktioner som t.ex. antal frågor du svill generera, 
              vilken årskurs eller svårighetsgrad frågorna ska ligga på, vilket format du vill ha frågorna 
              (t.ex. som flervalsfrågor, frågor med ett blanka utrymme att fylla i, eller frågor som behöver ett skriftligt svar.) 
              Du kan även välja vilket språk du vill ha frågorna i!</p>
              <p>Alternativen att välja mellan är följande:</p>
              <p>
                <ul>
                  <li>Länka in en webbsidda att generera frågorna utifrån.</li>
                  <li>Klistra in en längre text direkt i den stora textrutan.</li>
                  <li>Länka in en video från YouTube.</li>
                </ul>
              </p>
          </div>
          <div className='question-well-second-img-div'>
            <img className='question-well-second-img' src={questionWellImg} alt="" />
          </div>
        </div>
        <div className='question-well-how-to-second'>
          <div className='question-well-third-img-div'>
            <img className='question-well-third-img' src={guestionwellThirdImg} alt="" />
          </div>
          <div className='explain-text'>
              <p>Questionwell erbjuder även en premium-version, med vilken funktionen av att ladda upp en fil eller dokument tillkommer, 
                detta är såklart helt frivilligt, och eftersom den här kursen endast är en introduktionskurs, är detta inte något att bekymra sig över just nu. 
                  När du valt ett ämne, text, video eller webbsida, tryck på knappen "Generate Questions" för att fortsätta.
              </p>
              <p>
              På den här bilden kan vi se hur vår exempeltext har genererats till frågor, 
              som du nu kan välja mellan, lägga till i en lista och exportera.
              </p>
          </div>
        </div>
        <div className='question-well-how-to-four'>
          <div className='explain-text-two'>
              <p>
              Lägg till och Exportera <br />
              Välj de bästa frågorna att exportera. Som bilden visar, erbjuder Questionwell 
              flera olika exporterings-alternativ, bl.a. Kahoot, Microsoft Word, och Google slides.
              </p>
          </div>
          <div className='question-well-four-img-div'>
            <img className='question-well-four-img' src={questionwellimgfour} alt="" />
          </div>
        </div>
    </div>
    )}
    {showAiTools && <AiTools />}
    </>
  );
}
