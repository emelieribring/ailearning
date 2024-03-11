import React, { useState } from 'react';
import './goblinTools.css';
import AiTools from '../AiTools/AiTools.jsx';
import goblinToolsPic1 from '../../Images/goblintools.jpg';

const tipsData = [
  {
    tipText: 'AI-att-göra-lista',
    answerText: 'Det här verktyget hjälper dig genom att bryta ner uppgifter åt dig, så att du inte själv behöver tänka på det. Sidan är väldigt enkel och minimalistisk, byggd för att vara lätt att orientera sig på. Du kan lägga in en huvuduppgift, och under den bryta ner huvuduppgiften i mindre uppgifter, samt sätta en uppskattning av hur mycket tid var segment ska ta. Detta hjälper enormt med att enkelt skapa struktur och bryta ner uppgifter, som annars kan kännas klyddiga eller överväldigande.',
    img: goblinToolsPic1,
  },
  {
    tipText: 'Formuleraren',
    answerText: 'Den här delen av GoblinTools "översätter" texter - både på svenska och engelska - så att dem passar till andra toner och sammanhang. Du kan bland annat göra en text mer formell, sarkastisk, proffesionell, vänlig eller lättare att läsa och förstå! Här nedan har vi ett exempel:',
  },
  {
    tipText: 'Domaren',
    answerText: 'Känns det svårt att uttrycka rätt ton i text? Domaren är en AI-verktyg att konsultera om du är osäker på tonen i dina mejl, meddelanden eller sms. Vi kommunicerar allt mer i text och chatt i dagen samhälle, och att lyckas förmedla rätt ton och budskap i textblir då allt viktigare. Med domaren vid din sida har du som användare en klar fördel i effektiviserad kommunikation och förebygge av missförstånd i framtiden. Du har för extra tillgänglighet också möjligheten att använda din mikrofon och tala in en mening eller röstmeddelande. Du kan även trycka på plus-knappen för att lägga in ett svar på en konversation, och på så sätt kunna ge mer kontext! ',
  },
  {
    tipText: 'Uppskattaren',
    answerText: 'Svårt att planera din tid, är du tidspessimist, tisoptimist, eller har bara i allmänhet dålig tidsuppfattning? Många människor med t.ex. ADHD kan ha problem med att planera och förutsäga hur lång tid saker kan ta att göra, även om bristen på den förmågan såklart inte är exklusiv för den demografin, enbart. Fyll i vad du har för uppgift, och estimeraren kan här hjälpa dig genom att returnera en tidsuppskattning på nolltid! ',
  },
  {
    tipText: 'Kompileraren',
    answerText: 'Det finns många lösryckta tankar och idér och små saker vi säger att vi ska ta tag i för att sedan glömma i nästa sekund då minnet och påminnelsen av något annat vi skulle göra swishar förbi. I den här rutan kan du dumpa ner alla dina lösa tankar och i gengäld få en strukturerad lista att följa, snarlik Att-göra-listan, men här istället med en långt mer förenklad, mer specifik funktion. Du har i slutet även alternativet att föra över listan som genereras här till den lite mer komplexa multi-toolen "Magic to Do", eller AI-att-göra-listan vi beskrev i den första fliken. ',
  },
  {
    tipText: 'Kocken',
    answerText: 'Dålig på recept? I det här verktyget kan du skriva ner vilka matvaror du har hemma, för hur många personer rätten ska räcka till, potentiella allergier eller diet-restriktioner. Ai:n ger dig sedan ett förslag på recept! ',
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
