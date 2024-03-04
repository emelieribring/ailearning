import React, { useState } from 'react';
import './chatGPT.css';
import 'animate.css';

export default function ChatGPT() {

    const [boxes, setBoxes] = useState([
        { 
            show: false, 
            clicked: false, 
            content: (
                <div>
                    <p>
                        <strong>Var specifik och tydlig:</strong> Formulera dina frågor eller instruktioner på ett klart och precist sätt.
                        Ju tydligare din prompt är, desto bättre kommer ChatGPT att förstå och svara på ditt ärende.
                        Undvik vaga eller tvetydiga formuleringar. Om du vill ha detaljerad information, specificera detta i din prompt.
                    </p>
                </div>
            ),
        },
        { 
            show: false, 
            clicked: false, 
            content: (
                <div>
                    <p>
                        <strong>Använd kontext och detaljer:</strong> Tillhandahåll nödvändig kontext för att hjälpa ChatGPT att förstå sammanhanget bakom din fråga eller instruktion.
                        Inkludera relevanta detaljer som kan vägleda modellen mot att producera svar som matchar dina förväntningar.
                    </p>
                </div>
            ),
        },
        { 
            show: false, 
            clicked: false, 
            content: (
                <div>
                    <p>
                        <strong>Testa och iterera:</strong> Om du inte får önskade svar från ChatGPT, experimentera med olika formuleringar och strukturer i dina prompts.
                        Testa gradvis för att se hur små förändringar i frågor eller instruktioner kan påverka svaren. Ibland kan små justeringar göra stor skillnad.
                    </p>
                </div>
            ),
        },
        { 
            show: false, 
            clicked: false, 
            content: (
                <div>
                    <p>
                        <strong>Exempel:</strong> <br/> <strong>Dåligt:</strong> "Berätta om staden." <br /> <br/>
                        <strong>Bättre:</strong> "Kan du ge mig information om kulturen, sevärdheterna och maten i staden Paris?" <br /> <br/>
                        Genom att vara specifik, ge kontext och testa olika formuleringar kan du förbättra sannolikheten att få önskade och relevanta svar från ChatGPT.
                    </p>
                </div>
            ),
        },
        { 
            show: false, 
            clicked: false, 
            content: (
                <div>
                    <p>
                        <strong>Be ChatGPT ställa frågor tillbaka:</strong> <br/> <strong>Prompt:</strong> "Jag vill göra en marknadsföringskamapanj på instagram. Vad ska jag tänka på? Ställ gärna frågor om du behöver mer specifik information." <br /> <br/>
                        <strong>Svar från GPT:</strong> "Att skapa en marknadsföringskampanj på Instagram kräver planering och förståelse för målgruppen. Här är några steg och överväganden som kan hjälpa dig att komma igång:" <br /> <br/>
                        * Vilken är din målgrupp? Definiera ålder, kön, intressen och andra relevanta faktorer.
                        * Vad är ditt huvudmål med kampanjen? Öka försäljningen, öka medvetenheten, generera leads, eller något annat?
                    </p>
                </div>
            ),
        },
    ]);

    const plusClick = (index) => {
        setBoxes((prevBoxes) =>
            prevBoxes.map((box, i) => ({
                show: i === index ? !box.show : false,
                clicked: i === index ? !box.clicked : false,
                content: box.content, // Behåll tidigare innehåll
            }))
        );
    };

    return (
        <div className='section-two'>
            <div className='left'>
                <p className='chatGptTitle'>Chat GPT</p>
                <p className='chatGptText'>
                    Hur blir jag AI-viskare?
                    <br /><br />
                    För att maximera resultaten med Large Language Models inom AI, 
                    är det viktigt att behärska konsten att formulera prompts. 
                    Det utgör en central del av att dra nytta av olika LLM-tjänster. 
                    Effektiv kommunikation med chatten spelar en avgörande roll. 

                    <br /><br />
                    Klicka på plustecknen i bilden nedan för att få några användbara tips att beakta.
                
                </p>
            </div>
            <div className='right'>
                <div className='chat'></div>
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        className={`plus-${index + 1} ${
                            box.clicked ? 'clicked' : ''
                        }`}
                        onClick={() => plusClick(index)}
                    >
                        +
                    </div>
                ))}
                {boxes.map((box, index) => (
                    box.show && (
                        <div key={index} className={`popup-box-${index + 1} animate__animated animate__jackInTheBox`}>
                            <p>
                                <p>{box.content}</p>
                            </p>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
