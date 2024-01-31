import React from 'react';
import './sectionFour.css';

export default function SectionFour() {
  return (
    <div id='kursStart' className='section-four'>
        <div className='section-four-title'>
            <p>Här kan du svara på några frågor om ai och reflektera över hur du använder eller kan använda ai i din vardag/arbetsdag.</p>
        </div>
        <div className="section-four-top">
            <div className="question">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non, voluptas illo eius rerum id, voluptatem neque veniam ea ratione error dolore! Sapiente iusto atque neque qui est incidunt blanditiis?</p>
            </div>
            <textarea className='inputReflection' type="text" placeholder='Write your reflection here'/>
        </div>
        <div className="section-four-middle">
            <div className="question">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non, voluptas illo eius rerum id, voluptatem neque veniam ea ratione error dolore! Sapiente iusto atque neque qui est incidunt blanditiis?</p>
            </div>
            <textarea className='inputReflection' type="text" placeholder='Write your reflection here'/>
        </div>
        <div className="section-four-bottom">
            <div className="question">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non, voluptas illo eius rerum id, voluptatem neque veniam ea ratione error dolore! Sapiente iusto atque neque qui est incidunt blanditiis?</p>
            </div>
            <textarea className='inputReflection' type="text" placeholder='Write your reflection here'/>
        </div>
    </div>
  )
}
