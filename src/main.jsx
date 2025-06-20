import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Navigation from "./app/components/Navbar.jsx";
import Footer from "./app/components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
