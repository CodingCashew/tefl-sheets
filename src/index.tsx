import { ThemeProvider } from "@material-ui/core/styles";
import { cyan, lightGreen, lime } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
// import reportWebVitals from './reportWebVitals.js';

const theme = createTheme({
  palette: {
    primary: {
      // light: cyan[500],
      light: cyan["A200"],
      main: cyan[700],
      dark: cyan[900],
    },
    secondary: {
      light: lime["A400"],
      main: lightGreen[700],
      dark: lightGreen[800],
    },
  },
});

const root = (ReactDOM as any).createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <ShoppingCartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ShoppingCartProvider>
  </ThemeProvider>
);
