import HSL_logo from "../../assets/photos/HSL_logo.jpg";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <a href="#pelit" className="footer-link">Pelit</a>
          <a href="#faktatieto" className="footer-link">Faktatieto</a>
          <a href="#trakkeri" className="footer-link">Träkkeri</a>
          <a href="#podcast" className="footer-link">Podcast</a>
          <a href="#meditaatio" className="footer-link">Meditaatio</a>
        </nav>
        <p className="footer-description">
          <span>Kampanja </span>
          <span className="italic">Katse ylös </span>
          <span>kehottaa julkisen liikenteen matkustajia ottamaan enemmän irti arjesta. Vähentämällä ruutuaikaa, jää aikaa omille ajatuksille. Ajoita esimerkiksi päivittäinen työmatka omaksi ruuduttomaksi ajaksi. </span>
        </p>
        <img src={HSL_logo} alt="HSL logo" className="logo-icon"/> 
      </div>
    </footer>
  );
}

