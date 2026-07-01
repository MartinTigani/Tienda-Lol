import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import "./Login.css";

export const Login = () => {
    const {login} = useAuth();
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        email : "",
        password : "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
            console.log("Login successful");
            Navigate("/admin", { replace: true }); //se agrega el replace para que no se pueda volver a atras con el boton de atras del navegador
        } catch(error) {
            console.error(error);
            alert("Error al iniciar sesión. Por favor, verifica tus credenciales.");
        }
    }

    return (<form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar sesion</h2>

        <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
        </div>

        <button type="submit">Login</button>
    </form>)
}