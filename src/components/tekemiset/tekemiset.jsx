// Philipin osio

import "./tekemiset.css";

function TekemisetKortti( {title, description, image} ) {
    return (
        <div className="tekemiset-kortti">
            {image && (
                <div className="tekemiset-kuva-boxi">
                    <img src={image} alt="" className="tekemiset-kuva" />
                </div>
            )}
            <h3 className="tekemiset-title">{title}</h3>
            <p className="tekemiset-description"> {description}</p>
        </div>
    )
}

export default function Tekemiset() {
    return (
        <section className="tekemiset-section">
            <div className="tekemiset-container">
                <h2 className="tekemiset-main-title">Mitä teen matkani aikana ellen ole puhelimella?</h2>
                <p className="tekemiset-desc">
                    <span>
                        Oletko huomannut usein selaavasi puhelintasi metrossa, vaikket edes tahtoisi? Digikohina ja infoähky vie huomiomme ja keskittymiskykymme, mutta samalla sivuutamme myös arjen pienet hetket.
                    </span>
                    <br />
                    <br />
                    <span className="tekemiset-intro">Olemme koostaneet sinulle vaihtoehtoista tekemistä: </span>
                </p>
                <div className="tekemiset-kortti-wrapper">
                    <div className="tekemiset-kortit">
                        <TekemisetKortti
                            title="Bingo"
                            description="Laske matkan aikana esineitä joita näet ikkunasta. Voit täyttää nämä bingopeliimme tai pitää mielessä."
                        />
                        <TekemisetKortti
                            title="Träkkeri"
                            description="Näytä muille miten olet matkustanut ilman ruutuaikaa, ja jaa tämä suoritus someen helposti."
                        />
                        <TekemisetKortti
                            title="Podi"
                            description="Podcast ruutuajan vähentämisen hyödyistä, innostu ja näytä itse esimerkkiä seuraavalla reissulla."
                        />
                        <TekemisetKortti
                            title="Meditaatio"
                            description="Ota kiireisestä arjesta toisenlainen hyödyllinen aika itsellesi meditaation kanssa. Lue lisää miten."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}