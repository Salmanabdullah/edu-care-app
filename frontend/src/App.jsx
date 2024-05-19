import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CategoriesPanel from "./components/home/Categories/CategoriesPanel";
import ContentPanel from "./components/home/Content-Panel/ContentPanel";
import Footer from "./components/home/Footer/Footer";
import Header from "./components/home/Header/Header";
import SignIn from "./components/home/User/Sign-In/SignIn";
import SignUp from "./components/home/User/Sign-Up/SignUp";

const App = () => {
  return (
    <div>
      <Header />
      <CategoriesPanel />
      <ContentPanel />
      <Footer />
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
