import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className ="nav">
            <a href="#">Pelit</a>

            <Link to="/faktatieto">Faktatieto</Link>

            <a href="#">Träkkeri</a>
            <a href="#">Meditaatio</a>
            <a href="#">Podcast</a>
        </nav>
    );
}

export default Navbar;