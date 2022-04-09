import "./Register.css";
import { Link ,useNavigate} from "react-router-dom";
import { useRef } from "react";
import AuthService from "../../services/auth_service";

export const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(username, email, password).then((response) => {
        if (response) navigate(`/login`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginWraper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chat App</h3>
          <span className="loginDescription">
            Crea una cuenta para iniciar una conversación
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Nombre de Usuario"
              ref={username}
              className="loginInput"
            />
            <input placeholder="Correo" ref={email} className="loginInput" />
            <input
              placeholder="Contraseña"
              ref={password}
              className="loginInput"
            />
            <button className="loginBtn">Registrarse</button>
            <Link to="/login">
              <button className="loginRegisterBtn">Iniciar Sesion</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
