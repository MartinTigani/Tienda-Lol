import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if(loading) return <p>Cargando...</p> //clavee: esperamos a que se cargue el estado de autenticacion antes de renderizar el componente para que haya usuario antes de redirigir

  if(!user) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};