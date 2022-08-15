import './login.css';
import logo from "../images/characLogo.png"
function Header() {
    return (
        <>
            <div className="headerClass">
                <img src={logo} className="logoClass" />
            </div>
        </>
    )
}

export default Header;