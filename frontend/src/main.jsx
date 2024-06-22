import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { MapProvider } from "./context/mapContext.jsx";
import { UserProvider } from "./context/userContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserProvider>
        <MapProvider>
          <App />
        </MapProvider>
      </UserProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
