import React, { useState } from 'react';
import './sectionThree.css';
import 'animate.css';

export default function SectionThree() {
  const [visibleBubbles, setVisibleBubbles] = useState([0]);
  const [currentConversation, setCurrentConversation] = useState(0);

  const nextBubble = () => {
    setVisibleBubbles((prevBubbles) => {
      const nextIndex = Math.min(prevBubbles[prevBubbles.length - 1] + 1, totalBubbles - 1);
      return [...prevBubbles, nextIndex];
    });
  };

  const prevBubble = () => {
    setVisibleBubbles((prevBubbles) => {
      const lastIndex = prevBubbles[prevBubbles.length - 1];
      return prevBubbles.length > 1 ? prevBubbles.slice(0, -1) : [lastIndex];
    });
  };

  const nextConversation = () => {
    setCurrentConversation((prevConversation) => prevConversation + 1);
    setVisibleBubbles([0]);
  };

  const prevConversation = () => {
    setCurrentConversation((prevConversation) => Math.max(prevConversation - 1, 0));
    setVisibleBubbles([0]);
  };

  const totalBubbles = 4; 
  const conversations = [
    [ 
      "Berätta något om rymden",
      "Månen är en himlakropp som kretsar runt jorden. Den är ganska stor och har många kratrar och berg. Rymden är stor och har många stjärnor och planeter. Det finns svarta hål och galaxer också.",
      "Kan du ge mig detaljerad information om atmosfären på Mars och hur den skiljer sig från jorden? Fokusera särskilt på sammansättningen av gaser och eventuella likheter eller skillnader som kan påverka möjligheten till mänskligt liv.",
      "Mars har en tunn atmosfär som huvudsakligen består av koldioxid med små mängder kväve och argon. Det finns också spår av vattenånga. Jämfört med jorden har Mars en mycket mindre atmosfär och ingen magnetosfär, vilket gör att ytan exponeras för solvindar och strålning. Dessa faktorer, tillsammans med den tunna atmosfären, gör det svårt för flytande vatten att existera och skapar utmaningar för mänskligt liv på ytan."
    ],
    [
      "Vad ska jag äta till middag?",
      "Du kan överväga att göra en läcker kycklingpasta med färsk tomat och basilika. Alternativt kan en grillad lax med citron och örter vara en hälsosam och god middagsidé.",
      "Vad är ett enkelt och snabbt recept för en vegetarisk middag med lågt kolhydratinnehåll?",
      "En enkel och snabb vegetarisk middagsidé med lågt kolhydratinnehåll är en zucchininudelsallad med pesto, körsbärstomater och mozzarella. Du kan spiralera zucchinin för att skapa nudlar och sedan blanda dem med färsk pesto, skivade körsbärstomater och små bollar av mozzarella. Det är lätt att förbereda och fullt av smak."
    ],
    [
      "Hur kan jag SEO optimera min hemsida?",
      "För att SEO-optimera din hemsida finns det flera steg du kan ta. Börja med att noggrant välja relevanta sökord och inkludera dem i din webbplatsens meta-taggar, sidorubriker och innehåll. Se till att din webbplats har en tydlig hierarki och struktur för en användarvänlig upplevelse. Optimering av laddningstider är också viktigt, så komprimera bilder och använd caching-tekniker.",
      "Jag driver en e-handelssida som säljer hållbara produkter för utomhusaktiviteter. Hur kan jag genomföra en omfattande SEO-optimering för att öka synligheten för min webbplats och locka en målgrupp som är intresserad av miljövänliga alternativ? Jag har märkt att mina konkurrenter rankar högre i sökresultaten, och jag skulle vilja förstå specifika strategier och taktiker som kan göra min webbplats mer synlig. Finns det några specifika nyckelord eller tekniker som är särskilt effektiva inom hållbarhetsnischen? Tacksam för alla insikter och råd!",
      "En väldigt välskriven och detaljerad fråga! Här är några möjliga sätt att ytterligare förbättra och specialisera frågan för att få ännu mer exakta och användbara svar: Lägg till målgruppsinformation: Hur kan jag genomföra en omfattande SEO-optimering för att öka synligheten för min webbplats och locka en målgrupp som är intresserad av miljövänliga alternativ, särskilt bland personer som är engagerade i friluftsliv och hållbar livsstil? Be om konkreta verktyg och resurser: Kan du rekommendera specifika verktyg eller resurser som kan underlätta implementeringen av SEO-strategierna? Finns det några beprövade verktyg eller program som är särskilt användbara för e-handelsföretag som fokuserar på hållbara produkter? Nämn specifika plattformar: Är det några specifika plattformar eller marknadsföringskanaler där hållbara varumärken som mitt har sett framgång inom SEO? Finns det några specifika taktiker som är särskilt effektiva på sociala medieplattformar eller online-communitys inom miljövänliga och hållbara intressen?",
    ],
  ];

  return (
    <div className='section-three'>
      <div className='section-three-left'>
        <p className='leftTitle'>Exempel på hur du skriver en mer utförlig prompt</p>
        <p className='leftText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas, doloribus voluptates inventore molestias temporibus impedit, reprehenderit eum necessitatibus aperiam natus nisi maxime incidunt saepe quis ex laboriosam quae explicabo?</p>
        <p className='leftText'>Tryck på pilarna för att se en konversation med ChatGPT</p>
        <div className="arrow-buttons">
          <button className='prevConv' onClick={prevConversation} disabled={currentConversation === 0}>Föregående konversation</button>
          <button className='clickLeft' onClick={prevBubble} disabled={visibleBubbles.length === 1}>◄</button>
          <button className='clickRight' onClick={nextBubble} disabled={visibleBubbles.length === totalBubbles}>►</button>
          <button className='nextConv' onClick={nextConversation} disabled={currentConversation === conversations.length - 1}>Nästa konversation</button>
        </div>
      </div>
      <div className='section-three-right'>
        {visibleBubbles.map((bubbleIndex, index) => (
          <div key={index} className={`animate__animated animate__lightSpeedInRight chat-bubble-${index % 2 === 0 ? 'you animate__animated animate__lightSpeedInLeft' : 'me'}`}>
            <p><strong>{index % 2 === 0 ? 'Prompt:' : 'Svar:'}</strong> {conversations[currentConversation][bubbleIndex]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}