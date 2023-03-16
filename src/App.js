import { Route, Routes } from "react-router-dom";
import "./App.css";
import Enter from "./Enter/Enter";
import Square from "./Square/Square";
import Rectangle from "./Rectangle/Rectangle";
import Quadratic from "./Quadratic/Quadratic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/square" element={<Square />} />
        <Route path="/rectangle" element={<Rectangle />} />
        <Route path="/quadratic" element={<Quadratic />} />
      </Routes>
    </div>
  );
}

export default App;
