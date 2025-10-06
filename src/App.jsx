import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home"; // ✅ Import your actual Home page component
import { NotFound } from "./pages/NotFound"; // ✅ Make sure this is a valid named export

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
