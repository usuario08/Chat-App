import "./Register.css"
import {Link} from "react-router-dom"

export const Register = () => {
  return (
    <div className="loginContainer">
        <div className="loginWraper">
            <div className="loginLeft">
                <h3 className="loginLogo">Chat App</h3>
                <span className="loginDescription">Crea una cuenta para iniciar una conversación</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Nombre de Usuario" className="loginInput" />
                    <input placeholder="Correo" className="loginInput" />
                    <input placeholder="Contraseña" className="loginInput" />
                    <button className="loginBtn">Registrarse</button>
                    <Link to="/login">
                    <button className="loginRegisterBtn">Iniciar Sesion</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
