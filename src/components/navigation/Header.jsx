import Navbar from "./Navbar";
import "./Header.css"
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className ="header">
            <div className="header-content">
            
                <Link to="/" className="logo-link">
                
                    <div className="logo">
                        <img src="/images/HSL_logo.jpg" alt="HSL logo" className="logo-icon"/>
                    </div>
                </Link>

                <Navbar />

                <div className="info_icon">
                    <img src="/images/info_icon.png" alt="info icon" className="info-icon"/>
                </div>
            </div>

        </header>
    )
}

export default Header;