import { useNavigate } from "react-router-dom";
import "./ProductFormContainer.css";
import { useState } from "react";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../utils/validateProduct";
import { uploadImage } from "../../services/uploadImage";
import { createProduct } from "../../services/productsService";



export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //reseteamos los errores y el loading para que no quede en true si hubo un error en el submit
        setErrors({});
        setLoading(true);

        // Validamos el producto antes de enviarlo
        const newErrors = validateProduct({...product, file});
        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            //subimos la imagen
            const imageUrl = await uploadImage(file);

            //armamos el producto con la url de la imagen
            const productData = {
                ...product,
                price: Number(product.price),
                image: imageUrl,
            };

            //hacemos el alta del producto
            const id = await createProduct(productData);

            //vaciamos el formulario
            setProduct({
                name: "",
                price: "",
                description: "",
                category: "",
            });
            setFile(null);
            navigate(`/admin/products/success/${id}`, { replace: true });
            
        } catch(error){
            setErrors({ general: error.message});
        } finally {
            setLoading(false);
        }
    }

    return(
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    );
};