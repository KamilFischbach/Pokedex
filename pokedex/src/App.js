import "./App.css";
import { Routes, Route } from "react-router-dom";
import Grid from "./pages/Grid";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/about" element={<div>ABOUT</div>} />
      </Routes>
    </div>
  );
}

export default App;
