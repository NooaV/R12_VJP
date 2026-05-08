import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';




function Navbar() {

    const location = useLocation();

    //Määritetään, ollaanko etusivulla
    const isHomePage = location.pathname === "/";

    //Mobiilinavigaation hallinta
    const [isOpen, setOpen] = useState(false);

    const menuToggle = () => {setOpen(!isOpen);
    }

    const menuClose = () => {setOpen(false);
    }


    return (
        //Mobiilinavigaation hampurilaisnappi ja avautuva navigointi
        <nav className ="nav">
            <div className={isOpen ? "burgerikuva open" : "burgerikuva"} onClick={menuToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        
            <div className={isOpen ? "nav-items open" : "nav-items"}>
                <ul className ="nav-list">
                    {!isHomePage && (
                        <li><Link to="/" className="nav-home-link" onClick={menuClose}>Etusivulle</Link></li>
                    )}
                    <li><Link to="/kysely" onClick={menuClose}>Pelit</Link></li>
                    <li><Link to="/faktatieto" onClick={menuClose}>Tietoa</Link></li>
                </ul>
            </div>     
        </nav>
    );
}

export default Navbar;

