import "./Login.css";
import { Link } from "react-router-dom";
import {useRef} from "react"

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const hanldeClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginContainer">
      <div className="loginWraper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chat App</h3>
          <span className="loginDescription">
            Conéctate para iniciar una conversación
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={hanldeClick}>
            <input
              placeholder="Correo"
              required
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Contraseña"
              required
              minLength="6"
              type="password"
              className="loginInput"
              ref={password}
            />
            <button className="loginBtn">Ingresar</button>
            <Link to="/register">
              <button className="loginRegisterBtn">Crear Cuenta</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
