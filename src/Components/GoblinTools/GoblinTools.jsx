import React, { useState } from 'react';
import './goblinTools.css';
import AiTools from '../AiTools/AiTools.jsx';
import goblinToolsPic1 from '../../Images/goblintools.jpg';

const tipsData = [
  {
    tipText: 'Magic To-Do',
    answerText: 'Every creative endeavor requires that you take risks. If you try and don`t succeed, you`ve still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You`re not failing. You`re discovering what doesn`t work.',
    img: goblinToolsPic1,
  },
  {
    tipText: 'Judge',
    answerText: 'To spark creativity, feed your brain material like you`re cramming for a tough test. Then stop thinking about the problem you want to solve. Go surfing or take a leisurely walk. Research shows that letting your mind wander fosters creativity. It’s also found that meditation helps you spot and solve problems in creative ways. It promotes divergent thinking that gets novel ideas flowing. According to these studies, meditation also makes you more open to considering new solutions. Time to breathe.',
  },
  {
    tipText: 'Estimator',
    answerText: 'Text',
  },
  {
    tipText: 'Compiler',
    answerText: 'Text',
  },
  {
    tipText: 'Chef',
    answerText: 'Text',
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
        <div className='goblin-tools-box'>
          <div className='btnDiv'>
              <button onClick={handleBackBtn} className='goBackBtn'>⟵</button>
          </div>
          <div className='goblin-tools-about'>
            <h1 className='goblin-tools-about-title' >Goblin Tools</h1>
            <p className='goblin-tools-about-text'>Goblin Tools är ett riktigt vettigt verktyg för de elever som har 
            behov av att strukturera och bryta ned uppgifter i steg. Detta kan man med fördel visa eleverna - 
            det kräver inget konto eller inloggning. Eleverna kan checka av det de har gjort, 
            de kan få det exporterat till kalender, få uppskattning av hur lång tid en sak kan tänkas ta, etc. 
            Riktigt finurligt! 
            </p>
            <img className='goblin-tools-img' src={goblinToolsPic1} alt="questionWellImg" />
          </div>
          <div className="question-well-tips">
            {tipsData.map((tip, index) => (
              <div key={index} className={`tips-box tips-box-goblin-tools ${tipStates[index] ? 'expanded' : ''}`}>
                <p className='tip-text'>{getTipText(index)}</p>
                <span
                  onClick={() => handleTipClick(index)}
                  className={`tip-arrow tip-arrow ${tipStates[index] ? 'tip-arrow-up' : ''}`}
                >
                  <p>➤</p>
                </span>
                {tipStates[index] && (
                  <div className="answer-div-goblin">
                    <p>{tip.answerText}</p>
                    {tip.img && <img src={tip.img} alt="Tip Image" />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    </div>
    )}
    {showAiTools && <AiTools />}
    </>
  );
}
