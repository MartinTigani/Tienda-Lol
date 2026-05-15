import { Link } from "react-router-dom"
import logo from "../../assets/react.svg"
import "./Header.css"
import { Nav } from "../Nav/Nav"


export const Header = () => {
    return <header>
        <div className="logo.container">
            <Link to={'/'}>
                <img src={logo} alt="Logo" />
                <span>Reactiva</span>
            </Link>
        </div>
        <Nav />
    </header>
}