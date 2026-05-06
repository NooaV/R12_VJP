import React, { useEffect, useState } from 'react';
import './kysely.css';
import { use } from 'react';

const kysymykset = [
    {id: 1, text: "Päädyitkö tälle sivulle satunnaisen selailun kautta?" },
    {id: 2, text: "Selaatko puhelinta usein jo sänkyyn mentyäsi?" },
    {id: 3, text: "Onko puhelimen käyttö ensimmäinen asia, mitä aamulla teet?" },
    {id: 4, text: "Oletko yrittänyt vähentää ruutuaikaa, mutta epäonnistunut?" },
    {id: 5, text: "Oletko huomannut tänään selaavasi kännykkää turhaan?" },
    {id: 6, text: "Oletko saanut palautetta liiasta kännykänkäytöstä?" },
    {id: 7, text: "Koetko, että työntekosi heikentyy selailun seurauksena?" },
    {id: 8, text: "Menetätkö usein ajantajun selailun takia?" },
    {id: 9, text: "Tunnetko koskaan saavasi ilmoituksen, vaikket ole saanut?" },
    {id: 10, text: "Onko sinulta jäänyt oikea pysäkki väliin selailun takia?" },
    {id: 11, text: "Koetko halua/tarvetta parantaa puhelimen hallintaasi?" },
    {id: 12, text: "Huomaatko usein tarkistavasi ilmoituksesi?" },
    {id: 13, text: "Käytätkö puhelinta viihteeseen yli 3 tuntia päivässä?" },
    {id: 14, text: "Mietitkö usein omaa puhelimen käyttöäsi?" },
    {id: 15, text: "Aiotko katsoa ylös?" },
];

const posVastaukset = [11, 14, 15];

const Kysely = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [vastaukset, setVastaukset] = useState([]);
    const [showTulos, setShowTulos] = useState(false);
    const [aloitus, setAloitus] = useState(true);
    const [animoitu, setAnimoitu] = useState(0);

    const handleVastaus = (vastaus) => {
        const uudetVastaukset = [...vastaukset];
        uudetVastaukset[currentIndex] = vastaus;
        setVastaukset(uudetVastaukset);

        if (posVastaukset.includes(currentIndex + 1)) {
            if (vastaus === 'n') {
                uudetVastaukset[currentIndex] = 'y'
            }
            if (vastaus === 'y') {
                uudetVastaukset[currentIndex] = 'n'
            }
        }

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
        setAloitus(true);
    };

    const aloita = () => {
        setAloitus(false);
    };

    const yesCount = vastaukset.filter(a => a === 'y').length;
    const noCount = vastaukset.filter(a => a === 'n').length;

    const tulosProsentti = Math.round((noCount / kysymykset.length) * 100);

    useEffect(() => {
        if (showTulos){
            let init = 0;
            const kesto = 1000;
            const incr = tulosProsentti / (kesto / 10);

            const ajastin = setInterval(() => {
                init += incr;
                if (init >= tulosProsentti) {
                    setAnimoitu(tulosProsentti);
                    clearInterval(ajastin);
                } else {
                    setAnimoitu(Math.floor(init));
                }
            }, 10);
        } else {
            setAnimoitu(0);
        }
    }, [showTulos, tulosProsentti]);

    const getTulosViesti = (score) => {
        if (score <= 5) {
            return "Sinun on hyödyllistä tarkastella puhelimen käyttöäsi huolella.";
        } else if (score <= 10) {
            return "Sinulla on taipumusta liialiseen selailuun, mutta muutos on helposti tehtävissä!";
        } else if (score <= 13) {
            return "Sinä olet jo lähellä ihanteellisia puhelinkäytäntöjä! Enää pienellä panostuksella voit saada aikaan mahtavia tuloksia!";
        } else {
            return "Vau! Selkeästi osaat irrottautua puhelimestasi! Nauti matkastasi, sekä oikeasta maailmasta!";
        }
    };

    const valmisProsentti = ((currentIndex) / kysymykset.length) * 100;

    if (aloitus) {
        return (
            <div className="kysely-cont">
                <div className="aloitus-menu">
                    <h1>Kuinka hyvin hallitset puhelimen käyttöäsi?</h1>
                    <button className="kysymys-nappi" onClick={aloita}>Aloita testi</button>
                </div>
            </div>
        );
    };

    if (showTulos) {
        return (
            <div className="kysely-cont tulos-cont">
                <h2>Tulokset</h2>
                <div className="tulos">
                    Hallitset puhelimen käyttöäsi tasolla {animoitu}%
                </div>

                <div className="tulos-viesti">
                    {getTulosViesti(noCount)}
                </div>

                <button className="edellinen" onClick={alusta}>Tee testi uudestaan</button>
            </div>
        );
    };

    return (
        <div className="kysely-cont">
            {/*Edistyminen*/}
            <div className="edistys-tausta">
                <div
                    className="edistys-palkki"
                    style={{ width: valmisProsentti + '%' }}
                ></div>
            </div>

            {/*Kysymys*/}
            <h1 className="kysymys">{kysymykset[currentIndex].text}</h1>

            {/*Vastaus napit*/}
            <div className="vaihtoehdot">
                <button className="kysymys-nappi" onClick={() => handleVastaus('y')}>
                    Kyllä
                </button>
                <button className="kysymys-nappi" onClick={() => handleVastaus('n')}>
                    Ei
                </button>
            </div>

            {/*Edellinen*/}
            <div className="kysely-ala-osa">
                {currentIndex > 0 ? (
                    <button className="edellinen" onClick={handleEdellinen}>
                        Edellinen
                    </button>
                ) : (
                    <div style= {{ height: '24px' }}></div>
                )}
                    
            </div>
        </div>
    );
};

export default Kysely;