import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"
import { Nav } from "../Nav/Nav"


export const Header = () => {
    return <header>
        <div className="logo-container">
            <Link to={'/'}>
                <img src={logo} alt="Logo" />
                <span>League Of Legends</span>
            </Link>
        </div>
        <Nav />
    </header>
}