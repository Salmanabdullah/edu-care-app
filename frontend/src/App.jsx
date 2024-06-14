import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProfileComponent from "./components/UserProfile/ProfileComponent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<ProfileComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
