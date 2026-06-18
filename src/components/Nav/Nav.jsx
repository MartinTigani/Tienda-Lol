import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
    const { getTotalItems } = useCart(); // Importa la función para obtener el total de ítems
    const totalItems = getTotalItems(); // Obtiene el total de ítems en el carrito y lo guardo en la variable
    return(
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>Carrito
                        {totalItems > 0 && <span className="incart">{totalItems}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}