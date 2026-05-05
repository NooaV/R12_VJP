import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className ="nav">
            <Link to="/kysely">Pelit</Link>
            <Link to="/faktatieto">Faktatieto</Link>

            <a href="#">Träkkeri</a>
            <a href="#">Meditaatio</a>
            <a href="#">Podcast</a>
        </nav>
    );
}

export default Navbar;