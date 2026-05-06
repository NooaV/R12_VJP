//Ainon osio
import kuva1 from "/public/images/juna.jpg";
import kuva2 from "/public/images/Kate_ylös.jpg";
import kuva3 from "/public/images/metro.JPG";
import "./opetellaan.css";

export default function OpetellaanYhdessa() {
  return (
    <section className= "opetellaan">
      <h2 className= "opetellaan-title">Opetellaan yhdessä pitämään taukoa: katsotaan ylös!</h2>
      <div className= "opetellaan-pics">
      <img src={kuva1} alt="kuvituskuva1" />
      <div className= "left-pics">
        <img src={kuva2} alt="kuvituskva2" />
        <img src={kuva3} alt="kuvituskuva3" />
      </div>
      </div>


    </section>

    );
}