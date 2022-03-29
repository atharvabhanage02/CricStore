import "./App.css";
import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { ProductPage } from "./Pages/ProductListing/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock" element={<MockMan />} />
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
