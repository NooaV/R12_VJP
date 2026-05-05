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
    {id: 10, text: "Onko sinulta jäänyt julkisissa oikea pysäkki väliin selailun takia?" },
    {id: 11, text: "Aiotko katsoa ylös?" },
];

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

        if (currentIndex === 10) {
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

    if (aloitus) {
        return (
            <div className="kysely-cont">
                <div className="aloitus-menu">
                    <h1>Onko puhelimen käyttö sinulle ongelma?</h1>
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
                    {animoitu} %
                </div>

                <div className="tulos-viesti">
                    {getTulosViesti(noCount)}
                </div>

                <button className="kysely-nappi" onClick={alusta}>Tee testi uudestaan</button>
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