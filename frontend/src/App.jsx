import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MapComponent from "./components/MapComponent";



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
            <Route path="/map" element={<MapComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
