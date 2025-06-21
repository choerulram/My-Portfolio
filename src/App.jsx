import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes.jsx";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
