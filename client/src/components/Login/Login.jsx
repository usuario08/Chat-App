import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../services/auth_service.js";
import CircularProgress from "@mui/material/CircularProgress";
import { loading } from "../../actions/index";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const [errorLogin, setErrorLogin] = useState(false);
  const load = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) navigate("/home");
  }, []);

  const hanldeClick = async (e) => {
    e.preventDefault();
    const rpta = await AuthService.login(
      email.current.value,
      password.current.value
    );
    if (rpta) {
      dispatch(loading(true));
      navigate(`/home`);
      window.location.reload();
    } else {
      setErrorLogin(true);
      dispatch(loading(false));
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
              onChange={(e) => errorLogin && setErrorLogin(false)}
            />
            <input
              placeholder="Contraseña"
              required
              minLength="6"
              type="password"
              className="loginInput"
              ref={password}
              onChange={(e) => errorLogin && setErrorLogin(false)}
            />
            {errorLogin && (
              <p className="errorLogin">Correo o contraseña incorrecta</p>
            )}
            <button className="loginBtn">
              {load ? (
                <CircularProgress color="inherit" size="27px" />
              ) : (
                "Ingresar"
              )}
            </button>
            <Link to="/register">
              <button className="loginRegisterBtn">Crear Cuenta</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
