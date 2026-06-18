import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item"


export const ItemDetail = ({ item }) => {
    const { addItem } = useCart();

    // se agrega funcion flecha para q no se autoinvoque al cargar la pagina, sino solo cuando se haga click
    return (
        <Item {...item}>
            <button className="btn primary" onClick={ () => addItem(item)}>
                Agregar al carrito
            </button>
        </Item>
    );
};