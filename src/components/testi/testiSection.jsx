import "./testi.css";
import { Link } from "react-router-dom";

export default function TestiSection() {
  return (
    <section className="testi-section">
      <div className="section-divider"></div>
      <div className="testi-content">
        <div className="testi-text-content">
          <h2 className="testi-title">Minkälainen doomscrollaaja olet?</h2>
          <p className="testi-description">
            Doomscrollaaminen on ajatona scrollaamista puhelimella, varsinkin kun ei ole etsimässä mitään hyödyllistä vaan haluaa pelkästään viettää aikaa.
          </p>
          <Link to="/kysely" className="testi-button">Tee nopea testi!</Link>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}