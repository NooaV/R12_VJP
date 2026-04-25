//vähennäkäyttöä-osion koodi

import picture from //kuvan sijainti, heti ku joku lataa ne tänne projektiin;
import "./Elias.css";


export default function ReduceUsageSection() {
  return (
    <section className="vahennakayttoa">
      <div className="jakaja"></div>
      <div className="kontsa">
        <div className="vasen">
          <h2 className="otsikko">Vähennä puhelimen käyttöä julkisessa liikenteessä</h2>
          <p className="kuvaus">
            <span>Kampanja </span>
            <span className="kursiivi">Katse ylös </span>
            <span>kehottaa julkisen liikenteen matkustajia ottamaan enemmän irti arjesta. Vähentämällä ruutuaikaa, jää aikaa omille ajatuksille. Ajoita esimerkiksi päivittäinen työmatka omaksi ruuduttomaksi ajaksi. </span>
          </p>
          <div className="kuvaboksi">
            <img src={picture} alt="" className="kuva" />
          </div>
        </div>
        <div className="hyotylista">
          <Hyoty numero={1} />
          <Hyoty numero={2} />
          <Hyoty numero={3} />
          <button className="nappula">Lue lisää hyödyistä</button>
        </div>
      </div>
      <div className="jakaja"></div>
    </section>
  );
}


function Hyoty() {
  return (
    //tee jokaiseta kolmesta hyödystä oma "kortti", joita saa tehtyy helposti niin monta ku tarvii, numero identifioi tietyn kprtin
  );
}