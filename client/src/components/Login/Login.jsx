import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import AuthService from "../../services/auth_service.js";

export const Login = () => {
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) navigate("/home");
  }, []);

  const hanldeClick = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email.current.value, password.current.value).then(
        () => {
          navigate(`/home`);
          window.location.reload();
        }
      );
    } catch (error) {
      console.log(error);
    }
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
