import React, { useState } from 'react';
import './kysely.css';
import { use } from 'react';

const kysymykset = [
    {id: 1, text: "Päädyitkö tälle sivulle tarkoituksella?" },
    {id: 2, text: "Otatko puhelimen käteen sänkyyn mentyäsi useammin kuin 4 kertaa viikossa?" },
    {id: 3, text: "Onko puhelimen käyttö ensimmäinen asia, mitä aamulla teet?" },
    {id: 4, text: "Oletko yrittänyt vähentää puhelimen käyttöä ja huomannut epäonnistuvasi?" },
    {id: 5, text: "Oletko huomannut tänään selaavasi kännykkää turhaan?" },
    {id: 6, text: "Oletko saanut palautetta liiasta kännykänkäytöstä?" },
    {id: 7, text: "Koetko, että työntekosi tehokkuus tai tahti on heikennyt puhelimen käytön seurauksena?" },
    {id: 8, text: "Huomaatko kokevasi stressiä tai ahdistusta, kun puhelimesi ei ole lähelläsi?" },
    {id: 9, text: "Tunnetko haamuvärinöitä (tunnet ilmoitusten tuntopalautteen vaikkei ilmoitusta tule)?" },
    {id: 10, text: "Tämän testin tehtyäsi, aiotko jättää turhan selaamisen väliin edes kerran?" },
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

    const valmisProsentti = ((currentIndex + 1 ) / kysymykset.length) * 100:
};