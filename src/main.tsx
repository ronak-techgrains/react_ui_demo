import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
import { SnackbarProvider } from "notistack";
import customTheme from "./style/custom_theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider value={customTheme}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>
);
