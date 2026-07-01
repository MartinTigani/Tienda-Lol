import { useNavigate, useParams } from "react-router-dom";

export const ProductSuccess = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <section className="success-page">
            <div className="success-icon">✔</div>
            <h2>Producto cargado con éxito</h2>
            <p>ID de producto: {id}</p>
            <p>Puede cargar otro haciendo click enel boton</p>

            <button 
                className="btn bg-primary primary"
                onClick = {() => navigate("/admin", { replace: true })}
            >
                Agregar otro producto
            </button>
        </section>
    );
};