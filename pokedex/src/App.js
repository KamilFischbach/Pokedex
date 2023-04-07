import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PokeDetails from "./pages/PokeDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <p>HOME</p>
              <Link to="/about">About</Link>
              <Link to="/Ditto">Ditto</Link>
            </div>
          }
        />
        <Route path="/about" element={<div>ABOUT</div>} />
        <Route path="/Ditto" element={<PokeDetails id='132'/>} />
      </Routes>
    </div>
  );
}

export default App;
