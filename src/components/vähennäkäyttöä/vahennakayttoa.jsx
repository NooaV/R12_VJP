//vähennäkäyttöä-osion koodi

import "./vahennakayttoa.css";



export default function Vahennakayttoa() {
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
            <img src="images/kuva1.jpeg" alt="kuvituskuva" className="kuva" />
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


function Hyoty({numero}) {
  return (
    <div className="hyotykortti">
      <p className="hyotyteksti">Hyöty {numero}</p>
      <div className="ikoni">
        <img src="assets/photos/tahti_icon.png" alt="tähti-ikoni"/>
      </div>
    </div>
  );
}
