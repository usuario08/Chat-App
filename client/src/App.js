import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register"
import { Home } from "./components/Home/Home"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
