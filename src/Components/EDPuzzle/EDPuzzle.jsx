import React, { useState } from 'react';
import './edPuzzle.css';

export default function EDPuzzle() {

    const [isHovered, setHovered] = useState(false);

  return (
    <div className='edpuzzle'>
        <div className={`edLeft ${isHovered ? 'hiddenDiv' : ''}`}>
            <p className='puzzle-title'>ED Puzzle</p>
            <p className='puzzle-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Alias amet illo mollitia. Earum asperiores esse, corrupti voluptatum, 
                veniam mollitia ad placeat modi vel, quidem similique sit! Aspernatur dolores error quia.</p>
        </div>
        <div className="edRight" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <p className='puzzle-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Alias amet illo mollitia. Earum asperiores esse, corrupti voluptatum, 
                veniam mollitia ad placeat modi vel, quidem similique sit! Aspernatur dolores error quia.
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Voluptate enim mollitia odio ut facere sequi optio ad, cumque numquam 
                temporibus porro possimus repellendus atque saepe dolor fuga praesentium nulla sed.
                </p>
        </div>
    </div>
  )
}
