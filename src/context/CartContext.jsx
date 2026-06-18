
import { createContext, useContext, useState  } from "react";
import { useNavigate } from "react-router-dom";
//**Creamos contexto para el carrito de compras */
const CartContext = createContext();

//**Creamos contexto para el carrito de compras */
export const useCart = () => {
  const context = useContext(CartContext);
  if(!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }
  return context;
};

//**Proveedor (provider) */
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]); //empieza como carrito vacio

    //valida si esta en el cart el item q resivo como parametro
    const isIncart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    }

    //agrega al carrito
    const addItem = (item) => {
        if(isIncart(item)) {
            alert("el producto ya esta en el carrito");
            return;
        }
        setCart([...cart, item]);
        alert("producto agregado al carrito con exito ✨");
    }

    //eliminar un item del carrito
    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
        alert("producto eliminado del carrito con exito ✨");
    }



    //vacia el carrito
    const clearCart = () => {
        setCart([]);
    }

    //calcula de items en el carrito (porque no uso cuantos de cada item, sino solo el item, entonces el total de items es igual a la longitud del carrito)
    const getTotalItems = () => {
        return cart.length;
    }

    // calcula el total a pagar
    const getCartTotal = () => {
        const precioTotal = cart.reduce((acc,element) => acc + element.price, 0);
        return precioTotal;
    }

    //checkout de la compra
    const checkout = () => {
        confirm("¿Desea finalizar su compra?");
        alert("compra realizada con exito ✨");
        clearCart();
        navigate("/");      //realiza una navegacion programatica a la pagina principal despues de finalizar la compra
    }

    const values={isIncart,addItem, removeItem, clearCart, getTotalItems, getCartTotal, checkout};
    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}


