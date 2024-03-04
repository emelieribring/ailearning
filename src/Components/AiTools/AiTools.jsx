import React, { useState } from 'react';
import './aiTools.css';
import 'animate.css';
import QuestionWell from '../QuestionWell/QuestionWell.jsx';
import GammaApp from '../GammaApp/GammaApp';
import GoblinTools from '../GoblinTools/GoblinTools';
import questionWellCard from '../../Images/questionwellcard.webp';
export default function AiTools() {

    const [showQuestionWell, setShowQuestionWell] = useState(false);
    const [showGammaApp, setGammaApp] = useState(false);
    const [showGoblinTools, setGoblinTools] = useState(false);
    const [showBoxes, setShowBoxes] = useState(true);
  
    const handleHover = (event) => {
      const box = event.target;
      box.classList.add('animate__pulse');
    };
  
    const handleHoverOut = (event) => {
      const box = event.target;
      box.classList.remove('animate__pulse');
    };

    const handleGammaAppClick = () => {
      setGammaApp(true);
      setShowBoxes(false);
    };
  
    const handleQuestionWellClick = () => {
      setShowQuestionWell(true);
      setShowBoxes(false);
    };

    const handleGoblinToolsClick = () => {
      setGoblinTools(true);
      setShowBoxes(false);
    };


  return (
    <>
    {showBoxes && (
    <div className='question-test'>
        <div className="boxesTitle">
          <h1 className='box'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit, magnam repellendus et, distinctio facere perferendis, quasi architecto dicta incidunt quae! Delectus distinctio deserunt debitis commodi quaerat nesciunt vel earum?</p>
        </div>
        <div className='clickBoxes'>
            <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut} className="clickBox questionWell-box animate__animated">
                <div className='titleImg boxTitleHide show'></div>
                <h1 className='boxTitleHide show'>Question Well <br /><span className='underText'>question generator</span></h1>
                <p className='boxTextHide hide'>Questionwell är ett AI-verktyg som snabbt genererar frågor från texter som PDF-filer eller artiklar, perfekt för att skapa quiz och liknande. Det sorteras i olika format och kategorier för enkel användning.</p>
                <button onClick={handleQuestionWellClick} className='readMoreBtn hide'>Read more</button>
            </div>
            <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut} className="clickBox gammaApp-box animate__animated">
                <div className='titleImgGamma boxTitleHide show'></div>
                <h1 className='boxTitleHide show'>Gamma App <br /><span className='underText'>power point generator</span></h1>
                <p className='boxTextHide hide'>Gamma är ett verktyg som snabbt skapar presentationer, vilka sedan enkelt kan exporteras som PDF, vilket sparar tid och arbete.</p>
                <button onClick={handleGammaAppClick} className='readMoreBtn hide'>Read more</button>
            </div>
            <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut} className="clickBox goblinTools-box animate__animated">
                <div className='titleImgGoblin boxTitleHide show'></div>
                <h1 className='boxTitleHide show'>Goblin Tools <br /><span className='underText'>Todo-list generator</span></h1>
                <p className='boxTextHide hide'>Goblin Tools hjälper elever att strukturera och dela upp uppgifter i steg utan behov av konto eller inloggning. Elever kan markera färdiga uppgifter, exportera till kalendrar och få tidsuppskattningar. Ett effektivt och användarvänligt verktyg.</p>
                <button onClick={handleGoblinToolsClick} className='readMoreBtn hide'>Read more</button>
            </div>
        </div> 
    </div>
    )}
     {showGoblinTools && <GoblinTools/>}
     {showGammaApp && <GammaApp/>}
     {showQuestionWell && <QuestionWell/>}
     </>
  )
}
