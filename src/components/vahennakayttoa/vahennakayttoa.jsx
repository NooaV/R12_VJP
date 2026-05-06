//vähennäkäyttöä-osion koodi
import { Link } from "react-router-dom";
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
            <span>kehottaa olemaan läsnä arjessa edes metromatkan ajan. Vähentämällä ruutuaikaa jää aikaa omille ajatuksille. Ajoita esimerkiksi päivittäinen työmatka omaksi ruuduttomaksi ajaksesesi. </span>
          </p>
          <div className="kuvaboksi">
            <img src="images/kuva1.jpeg" alt="kuvituskuva" className="kuva" />
          </div>
        </div>
        <div className="hyotylista">
          <Hyoty teksti={"Palaudut arjen kiireestä"} />
          <Hyoty teksti={"Stressitasosi laskee"} />
          <Hyoty teksti={'Keskittymiskykysi palautuu'} />
          <Link to="/faktatieto" className="nappula">Lue lisää hyödyistä</Link>
        </div>
      </div>
      <div className="jakaja"></div>
    </section>
  );
}


function Hyoty({teksti}) {
  return (
    <div className="hyotykortti">
      <p className="hyotyteksti">{teksti}</p>
      <div className="ikoni">
        <img src="images/tahti_icon.png" alt="tähti-ikoni"/>
      </div>
    </div>
  );
}
