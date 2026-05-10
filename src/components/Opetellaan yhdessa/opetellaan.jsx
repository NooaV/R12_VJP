import kuva1 from "/public/images/pysäkki.jpg";
import kuva3 from "/public/images/Kate_ylös.jpg";
import kuva2 from "/public/images/metropysäkki.jpg";
import "./opetellaan.css";
import kampanjavideo2 from "/public/videos/kampanjavideo2.mp4"

export default function OpetellaanYhdessa() {
  return (
    <section className= "opetellaan">
      <h2 className= "opetellaan-title"
        >Opetellaan yhdessä pitämään taukoa: katsotaan ylös!</h2>
      <div className= "opetellaan-pics">
        <div className= "left-pics">
          <img className = "pic" src={kuva1} alt="Ratikkapysäkki, jolla on kampanjan mainos" />
          <img className = "pic" src={kuva2} alt="Metrotunneli, jonka mainostaulussa on kampanjan mainos" />
        </div>
        <div className = "right-pic">
          <video
            className="pic2"
            src={kampanjavideo2}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
      </div>
    </section>

    );
}