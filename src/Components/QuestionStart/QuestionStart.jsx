import React, { useState, useEffect } from 'react';
import './questionStart.css';

export default function QuestionStart() {

  const [jobTitle, setJobTitle] = useState('');
  const [tasks, setTasks] = useState('');
  const [repetitiveTasks, setRepetitiveTasks] = useState('');
  const [creativeTasks, setCreativeTasks] = useState('');
  const [timeSaved, setTimeSaved] = useState('');

  const handleInputChange = (event, setterFunction) => {
    const value = event.target.value;
    setterFunction(value);
    localStorage.setItem(event.target.name, value);
  };

  const loadDataFromLocalStorage = () => {
    setJobTitle(localStorage.getItem('jobTitle') || '');
    setTasks(localStorage.getItem('tasks') || '');
    setRepetitiveTasks(localStorage.getItem('repetitiveTasks') || '');
    setCreativeTasks(localStorage.getItem('creativeTasks') || '');
    setTimeSaved(localStorage.getItem('timeSaved') || '');
  };

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  return (
    <div id='kursStart' className='section-four'>
        <div className='section-four-title'>
            <p>Börja med att ta några minuter att fundera på frågorna nedan, skriv gärna ner dina svar.</p>
        </div>
        <div className="section-four-reflection">
            <div className="question">
                <p>Vilken branch jobbar du inom och vad är din yrkestitel?</p>
            </div>
            <textarea
                className='inputReflection'
                name='jobTitle'
                type="text"
                value={jobTitle}
                onChange={(e) => handleInputChange(e, setJobTitle)}
                placeholder='Write your reflection here'
            />
        </div>
        <div className="section-four-reflection">
            <div className="question">
                <p>Vilka specifika arbetsuppgifter ingår i din yrkesroll?</p>
            </div>
            <textarea
                className='inputReflection'
                name='tasks'
                type="text"
                value={tasks}
                onChange={(e) => handleInputChange(e, setTasks)}
                placeholder='Write your reflection here'
            />
        </div>
        <div className="section-four-reflection">
            <div className="question">
                <p>Vilka av dina arbetsuppgifter är repetitiva och rutinmässiga, och skulle kunna automatiseras med hjälp av AI?</p>
            </div>
            <textarea
                className='inputReflection'
                name='creativeTasks'
                type="text"
                value={creativeTasks}
                onChange={(e) => handleInputChange(e, setCreativeTasks)}
                placeholder='Write your reflection here'
            />
        </div>
        <div className="section-four-reflection">
            <div className="question">
                <p>Vilka av dina arbetsuppgifter kräver en högre grad av kreativa eller analytiskt tänkande, och är mindre lämpliga för automatisering?</p>
            </div>
            <textarea
                className='inputReflection'
                name='repetitiveTasks'
                type="text"
                value={repetitiveTasks}
                onChange={(e) => handleInputChange(e, setRepetitiveTasks)}
                placeholder='Write your reflection here'
            />
        </div>
        <div className="section-four-reflection">
            <div className="question">
                <p>Vad hade du kunnat göra med tiden du sparar på att låta AI göra jobbet? Hur hade uppgifterna i din yrkesroll ändrats?</p>
            </div>
            <textarea
                className='inputReflection'
                name='timeSaved'
                type="text"
                value={timeSaved}
                onChange={(e) => handleInputChange(e, setTimeSaved)}
                placeholder='Write your reflection here'
            />
        </div>
    </div>
  )
}
