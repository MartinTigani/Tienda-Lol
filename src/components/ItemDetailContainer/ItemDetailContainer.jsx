import { useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect } from "react";
import { getProductById } from "../../services/productsService";

export const ItemDetailContainer = () => {
    const {id} = useParams(); 

    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
        .then((data) => setItemDetail(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [id]);

    if(loading) {
        return <p>Cargando...</p>
    }
    if(!itemDetail) {
        return <p>Producto no encontrado</p>
    }

    return <section>
        <h1>Detalles de producto</h1>
        <div className="products-countainer">
            <ItemDetail item={itemDetail} />
        </div>
    </section>
} 