import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';




function Navbar() {

    const location = useLocation();

    // 2. Määritetään, ollaanko etusivulla
    const isHomePage = location.pathname === "/";

    return (
        <nav className ="nav">
            {!isHomePage && (
                <Link to="/" className="nav-home-link">Etusivulle</Link>
            )}
            <Link to="/kysely">Pelit</Link>
            <Link to="/faktatieto">Tietoa</Link>

           
            
            
        </nav>
    );
}

export default Navbar;