//Ainon osio
import kuva1 from "/public/images/pysäkki.jpg";
import kuva3 from "/public/images/Kate_ylös.jpg";
import kuva2 from "/public/images/metropysäkki.jpg";
import "./opetellaan.css";

export default function OpetellaanYhdessa() {
  return (
    <section className= "opetellaan">
      <h2 className= "opetellaan-title"
        >Opetellaan yhdessä pitämään taukoa: katsotaan ylös!</h2>
      <div className= "opetellaan-pics">
        <div className= "left-pics">
          <img className = "pic" src={kuva1} alt="kuvituskva2" />
          <img className = "pic" src={kuva2} alt="kuvituskuva3" />
        </div>
        <div className = "right-pic">
          <img className= "pic2"src={kuva3} alt="kuvituskuva1" />
        </div>
        
      </div>
    </section>

    );
}