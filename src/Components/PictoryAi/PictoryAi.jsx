import React, { useState } from 'react';
import './pictoryAi.css';
import pictoryImg from '../../Images/pictory-img-1.jpg';
import imgBoxOne from '../../Images/script-to-video-pictory.png';
import imgBoxTwo from '../../Images/article-to-video-pictory.png';
import imgBoxThree from '../../Images/edit-video-using-text-pictory.png';
import imgBoxFour from '../../Images/visuals-to-video-pictory.png';
import pictoryImgTwo from '../../Images/pictory-img-bygg.jpg';
import pictoryImgThree from '../../Images/pictory-img-last.jpg';
import pictoryImgFour from '../../Images/pictory-img-superlast.jpg';
import videoPictory from '../../videos/video.mp4';


export default function PictoryAi() {


    const [showSection, setShowSection] = useState(false);

    const toggleSection = () => {
      setShowSection(!showSection);
    };


  return (
    <div className='pictoryAI'>
        <h1 className="pictory-title" >PICTORY</h1>

        {showSection ? (
        <>
          { 
          <div className='pictoryAI'>
          <section className='pictory-section-one'>
            <div className='pictory-div-one'>
                <h1>Från läromedel till video</h1>
                <p>Pictory är ett verktyg som tar innehållet i ett läromedel, t.ex. en text, och formaterar om denna till en video. Du kopierar helt enkelt bara in en url till materialet. 
                    Om du inte kan relatera till något av detta, bortse inte från Pictory helt ännu. Verktyget kan även underlätta arbetet av att sätta ihop enklare videos i t.ex. marknadsföringssyfte eller för en Youtube-kanal.
                    Trots att gratis AI-verktyg kanske inte alltid är de mest sofistikerade, kan det här verktyget åtminstone generera en stabil grund att jobba utifrån, som med lite redigering ger resultat på klart mycket kortare tid, samtidigt som det kräver långt mindre arbete och material än att spela in en video själv.
                </p>
            </div>
            <div className='pictory-div-two'>
                <img src={pictoryImg} alt="" />
            </div>
        </section>
        <div className='inBetween'>
            <p>Efter att antingen ha loggat in med Google, eller skapat ett konto via Email,  ger Pictory dig fyra alternativ: <br /> <br />Dra pilen över boxarna </p>
        </div>
        <section className='pictory-section-two'>
            <div className='imgBox'>
                <img id='script-to-video' className='boxImg' src={imgBoxOne} alt="" />
                <p className='hidePictory'>Att göra om ditt eget script till en video.  </p>
            </div>
            <div className='imgBox'>
                <img id='article-to-video' className='boxImg' src={imgBoxTwo} alt="" />
                <p className='hidePictory'>Klistra in en länk till en artikel eller blogginlägg för att göra en video.</p>
            </div>
            <div className='imgBox'>    
                <img id='edit-video-using-text' className='boxImg' src={imgBoxThree} alt="" />
                <p className='hidePictory'>Ladda upp en video och redigera denna med hjälp av text prompts.</p>
            </div>
            <div className='imgBox'>
                <img id='visuals-to-video' className='boxImg' src={imgBoxFour} alt="" />
                <p className='hidePictory'>Ladda upp dina egna bilder och kortare videoklipp, för att låta AI:n  sätta ihop till en längre video.</p>
            </div>    
        </section>
        <div className='inBetween'>
            <p>För det här exemlets skull väljer vi alternativet Article to Video:</p>
        </div>
        <div className='inBetween'>
            <p>Efter att ha valt ut en lämplig artikel, för det här exemplet: https://atomcollaboration.se/sv/artiklar/bygg-en-larandekultur-i-8-steg/ , så klistrar vi in URL:en i Article to Video-rutan och klickar på "Proceed". </p>
        </div>
        <div className='inBetween'>
            <p>Efter att ha gått vidare, möts vi av vyn nedan. Här kan du själv fylla ut manuset med vilka scener som behövs till videon (tips: Det går alltid att konsultera chatGPT), eller helt enkelt bara fortsätta med de färdiga förslagen.</p>
        </div>
        <div className='inBetween'>
            <p>Klicka sedan på "Next" uppe i högra hörnet för att generera fram en video. </p>
        </div>
        <div className='pictory-pictures'>
            <img src={pictoryImgTwo} alt="" />
            <img src={pictoryImgThree} alt="" />
        </div>
        <div className='inBetween'>
            <p>Som illustrerat på bilden ovan, har nu en video med slides och passande bilder genererats! Du har även här möjligheten att antingen spela in din egen röst över videon, eller att använda ännu mer AI och låta den göra jobbet av att läsa upp ett manus (dock är detta dessvärre premium-versionen) . Du kan i menyn på vänster sida även lägga in andra, mer passande bilder och texter, om så skulle önskas. </p>
        </div>
        <section className='pictory-last-section'>
            <img src={pictoryImgFour} alt="" />
            <p>Ladda ner din video!
                När du är nöjd med resultatet, kan du enkelt ladda ner videon för att dela med andra. Det är bara att klicka på "Download"-knappen.
                Här nedan kommer vår färdiga video gällande Atoms Artikel: </p>
        </section>
        <section className='final-video'>
            <video src={videoPictory}></video>
        </section>
        </div>
        }
          <button onClick={toggleSection}>Tillbaka</button>
        </>
      ) : (
        <button className='show-pictory' onClick={toggleSection}>Visa mig mer om Pictory</button>
      )}

        
    </div>
  )
}
