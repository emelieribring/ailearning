import React from 'react';
import './heads.css';
import textPic from '../../Images/".png';

export default function Heads() {
  return (
    <div className='heads'>
        <div className="heads-left">
            <div className="headsCitat">
                <img src={textPic} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem illo, facilis quis velit enim.</p>
            </div>
            <div className="headsCitat">
                <img src={textPic} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem illo, facilis quis velit enim.</p>
            </div>
        </div>
        <div className="heads-right">
            <div className="headsCitat">
                <img src={textPic} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem illo, facilis quis velit enim.</p>
            </div>
            <div className="headsCitat">
                <img src={textPic} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem illo, facilis quis velit enim.</p>
            </div>
        </div>
    </div>
  )
}
