import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        setLoading(true);
        getProducts()
        .then((data) => setProducts(data))
        .catch((err) => console.log("Hubo un Error:", err))
        .finally(() =>
            setLoading(false));
    }, []);

    if(loading) {
        return <p>Cargando...</p>
    }
    return(<section>
        {/* el primer products es el nombre de la props (es la q tiene q recibir el itemList), y el q esta entre llaves es el estado products q se actualiza con la data del json */}
        <ItemList products={products}/> 
    </section>);
};