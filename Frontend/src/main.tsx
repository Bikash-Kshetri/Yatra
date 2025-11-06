import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import HeroSection from "./component/app";
import Navbar from "./component/navbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <HeroSection HeroSectionLogoSrc="/assets/react.svg" />
    </BrowserRouter>
  </StrictMode>
);
