import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "lenis/dist/lenis.css";
import App from "./App";
import { SmoothScroll } from "./components/shared/SmoothScroll";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScroll />
    <App />
  </StrictMode>,
);
