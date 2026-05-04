import React, { useState } from 'react';
import './kysely.css';
import { use } from 'react';

const kysymykset = [
    {id: 1, text: "Päädyitkö tälle sivulle satunnaisen selailun kautta?" },
    {id: 2, text: "Otatko puhelimen käteen sänkyyn mentyäsi useammin kuin 4 kertaa viikossa?" },
    {id: 3, text: "Onko puhelimen käyttö ensimmäinen asia, mitä aamulla teet?" },
    {id: 4, text: "Oletko yrittänyt vähentää puhelimen käyttöä ja huomannut epäonnistuvasi?" },
    {id: 5, text: "Oletko huomannut tänään selaavasi kännykkää turhaan?" },
    {id: 6, text: "Oletko saanut palautetta liiasta kännykänkäytöstä?" },
    {id: 7, text: "Koetko, että työntekosi tehokkuus tai tahti on heikennyt puhelimen käytön seurauksena?" },
    {id: 8, text: "Huomaatko kokevasi stressiä tai ahdistusta, kun puhelimesi ei ole lähelläsi?" },
    {id: 9, text: "Tunnetko haamuvärinöitä (tunnet ilmoitusten tuntopalautteen vaikkei ilmoitusta tule)?" },
    {id: 10, text: "Oletko koskaan jättänyt nousemasta oikealla pysäkillä puhelimen käytön takia" },
    {id: 11, text: "Tämän testin tehtyäsi, aiotko jättää turhan selaamisen väliin edes kerran?" },
];

const Kysely = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [vastaukset, setVastaukset] = useState([]);
    const [showTulos, setShowTulos] = useState(false);

    const handleVastaus = (vastaus) => {
        const uudetVastaukset = [...vastaukset];
        uudetVastaukset[currentIndex] = vastaus;
        setVastaukset(uudetVastaukset);

        if (currentIndex < kysymykset.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setShowTulos(true);
        }
    };

    const handleEdellinen = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const alusta = () => {
        setCurrentIndex(0);
        setVastaukset([]);
        setShowTulos(false);
    };

    const yesCount = vastaukset.filter(a => a === 'y').length;
    const noCount = vastaukset.filter(a => a === 'n').length;

    const tulosProsentti = (noCount / kysymykset.length) * 100;

    const getTulosViesti = (score) => {
        if (score <= 2) {
            return "Sinun on hyödyllistä tarkastella puhelimen käyttöäsi huolella.";
        } else if (score <= 5) {
            return "Sinulla on taipumusta liialiseen selailuun, mutta muutos on helposti tehtävissä!";
        } else if (score <= 8) {
            return "Sinä olet jo hyvin lähellä ihanteellisia puhelinkäytäntöjä!";
        } else {
            return "Vau! Selkeästi osaat irrottautua puhelimestasi! Nauti matkastasi, sekä oikeasta maailmasta!";
        }
    };

    const valmisProsentti = ((currentIndex + 1 ) / kysymykset.length) * 100;

    if (showTulos) {
        return (
            <div className="kysely-cont tulos-cont">
                <h2>Tulokset</h2>
                <div className="tulos">
                    {tulosProsentti}
                </div>

                <div className="tulos-viesti">
                    {getTulosViesti(yesCount)}
                </div>

                <button className="kysely-nappi" onClick={alusta}>Tee testi uudestaan</button>
            </div>
        )
    };
};