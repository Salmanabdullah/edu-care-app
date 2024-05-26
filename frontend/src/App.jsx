import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Sign-Up/SignUp";
import Home from "./components/HomePage/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="api/user/login" element={<Login />} />
        <Route path="api/user/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
