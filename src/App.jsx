import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Posten1 from "./posten/Posten1";
import Posten2 from "./posten/Posten2";
import Posten3 from "./posten/Posten3";
import Posten4 from "./posten/Posten4";
import Posten5 from "./posten/Posten5";
import Posten6 from "./posten/Posten6";
import PostenEnde from "./posten/PostenEnde";

function App() {
  return (
    <HashRouter>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Posten1 />} />
          <Route path="/posten1" element={<Posten1 />} />
          <Route path="/posten2" element={<Posten2 />} />
          <Route path="/posten3" element={<Posten3 />} />
          <Route path="/posten4" element={<Posten4 />} />
          <Route path="/posten5" element={<Posten5 />} />
          <Route path="/posten6" element={<Posten6 />} />
          <Route path="/postenEnde" element={<PostenEnde />} />

        </Routes>
        <Routes>

        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
