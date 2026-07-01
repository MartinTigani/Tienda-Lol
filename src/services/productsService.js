import { collection, getDocs, addDoc, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

//todas las funciones van a utilizar esta coleccion
//la hacemos global para no tener que repetirla en cada funcion
//creamos la referencia a la coleccion de productos
const productsRef = collection(db, "products");

/* -------------------------------------------------------------------------- */
/*                               TRAER PRODUCTOS                              */
/* -------------------------------------------------------------------------- */

export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);
        const productsFormat = snapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()};
        });
    return productsFormat;
    }catch (err) {
        console.log("Error al obtener los productos", err);
        return [];
    }
};

/* -------------------------------------------------------------------------- */
/*                            TRAER PRODUCTO POR ID                           */
/* -------------------------------------------------------------------------- */

export const getProductById = async (id) => {
    try{
        //creamos la referencia al producto que queremos traer
        const productRef = doc(db, "products", id);

        //traemos el documento
        const snapshot = await getDoc(productRef);

        //verificamos si el documento existe
        if(snapshot.exists()){
            const productFormat = {id: snapshot.id, ...snapshot.data()};
            console.log("Producto encontrado:", productFormat);
            return productFormat;
        } else {
            return null;
        }
    } catch (err) {
        console.log("Error al obtener el producto por id", err);
        return null;
    }

};

/* -------------------------------------------------------------------------- */
/*                              ALTA DE PRODUCTO                              */
/* -------------------------------------------------------------------------- */

export const createProduct = async (productData) => {
    try{
        //se usa la funcion addDoc para agregar un nuevo documento a la coleccion de productos y pasarle la coleccion y el producto que queremos agregar
        const docRef = await addDoc(productsRef, productData);
        return docRef.id;
    } catch (err) {
        console.error("Error al crear el producto", err);
        throw err;
    }
};

/* -------------------------------------------------------------------------- */
/*                          SI FILTRAMOS POR CATEGORY                         */
/* -------------------------------------------------------------------------- */

// export const getProductsByCategory = async (category) => {
//     try {
//         let queryRef;

//         if(category){
//             queryRef = query(productsRef, where("category", "==", category));
//         } else {
//             queryRef = productsRef;
//         }

//         //traer los documentos
//         const snapshot = await getDocs(queryRef);

//         //mapeo de datos para devolverlos en un formato mas amigable
//         const productsFormat = snapshot.docs.map((doc) => {
//             return {id: doc.id, ...doc.data()};
//         });
//         return productsFormat;
//     } catch (err) {
//         console.log("Error al obtener los productos por categoria", err);
//         return [];
//     }
// };

