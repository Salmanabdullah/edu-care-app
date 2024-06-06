import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { MapProvider } from "./context/mapContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MapProvider>
        <App />
      </MapProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
