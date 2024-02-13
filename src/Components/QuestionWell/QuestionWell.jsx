import React, { useState } from 'react';
import './questionWell.css';
import AiTools from '../AiTools/AiTools.jsx';
import questionWellImg from '../../Images/questionWell1.jpg';

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
    <div className="container">
      {showTools && (
        <div className='question-wells-box'>
          <div className='btnDiv'>
              <button onClick={handleBackBtn} className='goBackBtn'>Back</button>
          </div>
          <div className='question-well-about'>
            <h1 className='question-well-about-title' >Questionwell</h1>
            <p className='question-well-about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consequuntur! 
              Dolores unde ipsam molestias perspiciatis doloremque reprehenderit vitae. 
              Accusantium vel magnam molestiae perferendis assumenda veniam soluta ex voluptatibus cumque minus.
            </p>
            <img className='questionWellImg' src={questionWellImg} alt="questionWellImg" />
          </div>
          <div className="question-well-tips">
            {tipsData.map((tip, index) => (
              <div key={index} className={`tips-box ${tipStates[index] ? 'expanded' : ''}`}>
                <p className='tip-text'>{getTipText(index)}</p>
                <span
                  onClick={() => handleTipClick(index)}
                  className={`tip-arrow ${tipStates[index] ? 'tip-arrow-up' : ''}`}
                >
                  ↓
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
      )}
      {showAiTools && <AiTools />}
    </div>
  );
}
