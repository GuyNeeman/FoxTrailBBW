import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Posten1 from "./posten/Posten1";
import Posten2 from "./posten/Posten2";
import Posten3 from "./posten/Posten3";

function App() {
  return (
      <>
        <div className="container mt-4">
          <Routes>
            <Route path="/posten1" element={<Posten1 />} />
            <Route path="/posten2" element={<Posten2 />} />
            <Route path="/posten3" element={<Posten3 />} />
          </Routes>
        </div>
      </>
  );
}

export default App;