import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="api/user/login" element={<Login />} />
        <Route path="api/user/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
