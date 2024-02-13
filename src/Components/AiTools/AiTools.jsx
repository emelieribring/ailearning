import React, { useState } from 'react';
import './aiTools.css';
import 'animate.css';
import QuestionWell from '../QuestionWell/QuestionWell.jsx';

export default function AiTools() {

    const [showQuestionWell, setShowQuestionWell] = useState(false);
    const [showBoxes, setShowBoxes] = useState(true);
  
    const handleHover = (event) => {
      const box = event.target;
      box.classList.add('animate__swing');
    };
  
    const handleHoverOut = (event) => {
      const box = event.target;
      box.classList.remove('animate__swing');
    };
  
    const handleClick = () => {
      setShowQuestionWell(true);
      setShowBoxes(false);
    };

  return (
    <div className='question-test'>
        {showBoxes && (
        <div className="boxesTitle">
          <h1 className='box'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit, magnam repellendus et, distinctio facere perferendis, quasi architecto dicta incidunt quae! Delectus distinctio deserunt debitis commodi quaerat nesciunt vel earum?</p>
        </div>
      )}
      {showBoxes && (
        <div className='clickBoxes'>
            <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut} className="clickBox questionWell-box animate__animated">
                <h1 className='boxTitleHide show'>Question <br /> Well</h1>
                <p className='boxTextHide hide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis adipisci tempora, dicta nesciunt nobis sint vel minima aliquam porro illum? Quis repellat omnis deserunt harum voluptate rerum sequi nam.</p>
                <button onClick={handleClick} className='readMoreBtn hide'>Read more</button>
            </div>
            <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut} className="clickBox gammaApp-box animate__animated">
                <h1 className='boxTitleHide show'>Gamma <br /> App</h1>
                <p className='boxTextHide hide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis adipisci tempora, dicta nesciunt nobis sint vel minima aliquam porro illum? Quis repellat omnis deserunt harum voluptate rerum sequi nam.</p>
                <button onClick={handleClick} className='readMoreBtn hide'>Read more</button>
            </div>
            <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut} className="clickBox goblinTools-box animate__animated">
                <h1 className='boxTitleHide show'>Goblin <br /> Tools</h1>
                <p className='boxTextHide hide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis adipisci tempora, dicta nesciunt nobis sint vel minima aliquam porro illum? Quis repellat omnis deserunt harum voluptate rerum sequi nam.</p>
                <button onClick={handleClick} className='readMoreBtn hide'>Read more</button>
            </div>
        </div> 
        )}
        {showQuestionWell && <QuestionWell/>}
    </div>
  )
}
