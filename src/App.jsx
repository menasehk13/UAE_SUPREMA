import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} path="/" />
      <Route element={<UnderConstruction/>} path="*"/>
    </Routes>
  );
}

export default App;
