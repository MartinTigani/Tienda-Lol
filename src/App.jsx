import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/Cart/CartView';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer';
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard';
import { Login } from './components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        {/*--------------------------Rutas públicas--------------------------*/}
        <Route element={<PublicLayout/>}>
          <Route path="/" element={<ItemListContainer />} />
          {/* ruta para filtrar categorias, el :category es un parametro que se pasa a la ruta */}
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<CartView/>}/>
        </Route>

        <Route path="admin/login" element={<Login />}/>
        {/*--------------------------Admin--------------------------*/}
        <Route path="/admin" element={<ProtectedRoute>
          <AdminLayout/>
        </ProtectedRoute>
        }>

          {/*index aca significa: es lo primero q vas a hacer cuando accedas a /admin */}
          <Route index element={<Navigate to ={"dashboard"}/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>

          <Route path="products/new" element={<ProductFormContainer/>}/>
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
