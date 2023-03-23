import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

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
            </div>
          }
        />
        <Route path="/about" element={<div>ABOUT</div>} />
      </Routes>
    </div>
  );
}

export default App;
