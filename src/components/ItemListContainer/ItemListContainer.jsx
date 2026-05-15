import { use, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import { useEffect } from "react";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/data/products.json")
        .then((res) =>(res.json()))
        .then(data => setProducts(data))
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false);
        });
    }, []);

    console.log(products);

    if(loading) {
        return <p>Cargando...</p>
    }

    return(<section>
        {/* el primer products es el nombre de la props (es la q tiene q recibir el itemList), y el q esta entre llaves es el estado products q se actualiza con la data del json */}
    
        <ItemList products={products}/> 
    </section>);
};