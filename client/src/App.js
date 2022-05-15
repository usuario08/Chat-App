import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import { ContentChat } from "./components/ContentChat/ContentChat";
import AuthService from "./services/auth_service";

function App() {
  const user = AuthService.getCurrentUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/messenger"
          element={user ? <ContentChat /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
