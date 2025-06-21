import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* Tambahkan route lain di sini jika diperlukan */}
  </Routes>
);

export default AppRoutes;
