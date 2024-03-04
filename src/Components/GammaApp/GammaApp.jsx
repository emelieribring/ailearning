import React, { useState } from 'react';
import './gammaApp.css';
import AiTools from '../AiTools/AiTools.jsx';
import gammaAppImg from '../../Images/gamma-app-first-img.jpg';
import gammaAppSecond from '../../Images/gamma-app-second-img.png';
import gammaAppImgThird from '../../Images/gamma-app-img-third.jpg';
import gammaAppImgFour from '../../Images/gamma-app-img-four.jpg';
import gammaAppImgFive from '../../Images/gammaPic4.jpg';
import gammaAppImgSix from '../../Images/gammaPic5.png';
import gammaAppImgSeven from '../../Images/gammaPic6.jpg';
import gammaAppImgEight from '../../Images/gammaPic7.png';



const tipsData = [
  {
    tipText: 'Pros',
    answerText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae sint ab voluptas maiores eaque vitae, quibusdam dolorem iusto, totam omnis voluptatem ipsa amet cupiditate sequi velit ullam veniam quidem?',
  },
  {
    tipText: 'Cons',
    answerText: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae sint ab voluptas maiores eaque vitae, quibusdam dolorem iusto, totam omnis voluptatem ipsa amet cupiditate sequi velit ullam veniam quidem?',
  },
  {
    tipText: 'Tips',
    answerText: 'Answer text for Tip 1',
  },
  {
    tipText: 'Tips',
    answerText: 'Answer text for Tip 2',
  },
  {
    tipText: 'Tips',
    answerText: 'Answer text for Tip 3',
  }
];



export default function GammaApp() {
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
        <div className='gamma-app-box'>
          <div className='btnDiv'>
              <button onClick={handleBackBtn} className='goBackBtn'>⟵</button>
          </div>
          <div className='gamma-app-about'>
            <h1 className='gamma-app-about-title' >Gamma App</h1>
            <p className='gamma-app-about-text'>
            Tänk hur mycket tid och energi du hade kunnat spara på att inte sitta och peta med powerpoints. 
            Gamma är verktyget som genererar en presentation, med mycket mindre tid och arbete. 
            Du kan sedan enkelt exportera presentationen efteråt som en PDF. <br /> <br />
            Nedan kan du se startsidan för adressen Gamma.app: 
            </p>
            <img className='gammaAppImg' src={gammaAppImg} alt="questionWellImg" />
          </div>
          <div className="question-well-tips">
            {tipsData.map((tip, index) => (
              <div key={index} className={`tips-box tips-box-gamma-app ${tipStates[index] ? 'expanded' : ''}`}>
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
        <div className="gamma-app-second-div">
          <div className="gamma-app-second-text">
            <p>Sidan uppmanar här dig till att skapa ett gratis konto, antingen genom ditt Google-konto, 
              eller med en vanlig Email-adress. </p>
          </div>
          <div className="gamma-app-second-img-div">
            <img className="gamma-app-second-img-div" src={gammaAppSecond} alt="" />
          </div>
        </div>
        <div className="gamma-app-third-div">
          <div className="gamma-app-third-img-div">
            <img className="gamma-app-third-img-div" src={gammaAppImgThird} alt="" />
          </div>
          <div className="gamma-app-third-text">
            <p>Efter att du skapat ditt konto och loggat in ber Gamma dig att sätta upp din arbetsyta. 
              Efter att Setup-processen är klar, presenteras du med tre alternativ: </p>
          </div>
        </div>
        <div className="gamma-app-four-div">
          <div className="gamma-app-four-img-div">
            <img className="gamma-app-four-img-div" src={gammaAppImgFour} alt="" />
          </div>
          <div className="gamma-app-four-text">
            <p>
              <ul>
                <li>Att klistra in en redan färdig text eller skriva ner dina samlade anteckningar.</li><br />
                <br />
                <li>Att skapa en presentation med promps (kom ihåg avsnittet om prompt engereering!)</li><br />
                <br />
                <li>Importera ett färdigt dokument eller presentation för att redigera eller uppgradera.</li><br />
                <br />
              </ul>
            </p>
          </div>
        </div>
        <div className="gamma-app-four-div">
          <div className="gamma-app-four-img-div">
           <img className="gamma-app-four-img-div" src={gammaAppImgFive} alt="" />
          </div>
        </div>
        <div className="gamma-app-four-div">
          <div className="gamma-app-four-img-div">
            <img className="gamma-app-four-img-div" src={gammaAppImgSix} alt="" />
          </div>
          <div className="gamma-app-four-text">
            <p>
            Fyll i önskade titlar
            Här kommer vi till nästa sida där titlarna till dina kort genereras, 
            vill du lägga till eller ta bort kort, kan du göra det i det här steget. 
            När du känner dig klar, gå vidare till nästa steg. Nya användare får 400 krediter, 
            och det "kostar" ca 40 att generera en presentation. 
            För fler krediter kan du sedan antingen välja premium-versionen... 
            Eller göra ett nytt konto ;) 
            </p>
          </div>
        </div>
        <div className="gamma-app-four-div">
          <div className="gamma-app-four-img-div">
            <img className="gamma-app-four-img-div" src={gammaAppImgSeven} alt="" />
          </div>    
        </div>
        <div className="gamma-app-four-div">
          <div className="gamma-app-four-img-div">
            <img className="gamma-app-four-img-div" src={gammaAppImgEight} alt="" />
          </div>
          <div className="gamma-app-four-text">
            <p>
            När du valt ditt tema, tryck sedan på knappen "Generate" 
            för att få fram din presentation! För att sedan exportera: 
            Tryck på "Share"uppe i högra hörnet, och sedan "Export", 
            du kan nu exportera detta som en snygg, 
            färdig powerpoint-presentation!
            </p>
          </div>
        </div>
      </div>
    )}
    {showAiTools && <AiTools />}
    </>
  );
}
