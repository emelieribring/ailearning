import React from 'react';
import './questionWell.css';
import questionImgOne from '../../Images/questionWell1.jpg';
import questionImgTwo from '../../Images/QuestionWell2.jpg';
import 'animate.css'; 

export default function QuestionWell() {

   
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    });
  });
  
 const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
  

  return (
    <div className='section-five'>
        <div className='section-five-left'>
            <h1>Questionwell</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa asperiores porro 
                vitae ullam, pariatur architecto dignissimos? Iusto sed provident rem, vero, 
                repellendus accusantium consequuntur, hic inventore fugit corrupti nulla!
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt 
                molestias assumenda amet eligendi voluptates, et itaque sunt voluptatem 
                necessitatibus sit, exercitationem blanditiis possimus asperiores expedita
                animi dolore a labore quam!</p>
                <img className='questionImg hidden' src={questionImgTwo} alt="" />
        </div>
        <div className='section-five-right'>
            <img className='questionImg hidden' src={questionImgOne} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa asperiores porro 
                vitae ullam, pariatur architecto dignissimos? Iusto sed provident rem, vero, 
                repellendus accusantium consequuntur, hic inventore fugit corrupti nulla!
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt 
                molestias assumenda amet eligendi voluptates, et itaque sunt voluptatem 
                necessitatibus sit, exercitationem blanditiis possimus asperiores expedita
                animi dolore a labore quam!</p>
        </div>
    </div>
  )
}
