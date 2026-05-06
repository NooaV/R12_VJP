import "./testi.css";
import { Link } from "react-router-dom";

export default function TestiSection() {
  return (
    <section className="testi-section">
      <div className="section-divider"></div>
      <div className="testi-content">
        <div className="testi-text-content">
          <h2 className="testi-title">Testaa suhteesi puhelimen selailuun!</h2>
          <p className="testi-description">
            Jokainen meistä selailee puhelintaan turhaan. Testaa siis millä tasolla hallitset omaa puhelimen käyttöäsi.
          </p>
          <Link to="/kysely" className="testi-button">Tee nopea testi!</Link>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}