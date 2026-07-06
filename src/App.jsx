import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Posten1 from "./posten/Posten1";
import Posten2 from "./posten/Posten2";
import Posten3 from "./posten/Posten3";
import Posten4 from "./posten/Posten4.jsx"

function App() {
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Foxtrail
            </Link>

            <div className="navbar-nav">
              <Link className="nav-link" to="/posten1">
                Posten 1
              </Link>
              <Link className="nav-link" to="/posten2">
                Posten 2
              </Link>
              <Link className="nav-link" to="/posten3">
                Posten 3
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/posten1" element={<Posten1 />} />
            <Route path="/posten2" element={<Posten2 />} />
            <Route path="/posten3" element={<Posten3 />} />
            <Route path="/posten4" element={<Posten4 />} />
          </Routes>
        </div>
      </>
  );
}

export default App;