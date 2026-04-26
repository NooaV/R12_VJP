import Navbar from "./Navbar";
import "./Header.css"
import HSL_logo from "../../assets/HSL_logo.jpg";


function Header() {
    return (
        <header className ="header">
            <div className="header-content">
            
                <div className="logo">
                    <img src={HSL_logo} alt="HSL logo" className="logo-icon"/>
                </div>

                <Navbar />

                <div className="info">
                    <span>i{/*tähän info logo*/}</span>
                </div>
            </div>

        </header>
    )
}

export default Header;