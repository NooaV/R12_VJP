import Navbar from "./Navbar";
import "./Header.css"
import HSL_logo from "../../assets/photos/HSL_logo.jpg";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className ="header">
            <div className="header-content">
            
                <Link to="/" className="logo-link">
                
                    <div className="logo">
                        <img src={HSL_logo} alt="HSL logo" className="logo-icon"/>
                    </div>
                </Link>

                <Navbar />

                <div className="info">
                    <span>i{/*tähän info logo*/}</span>
                </div>
            </div>

        </header>
    )
}

export default Header;