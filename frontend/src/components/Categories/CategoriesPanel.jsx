import React,{useContext} from "react";
//import MapComponent from "../MapComponent";
import {useNavigate} from "react-router-dom"
import { MapContext } from "../../context/mapContext";

const CategoriesPanel = () => {
  const navigate = useNavigate()
  const { fetchData } = useContext(MapContext);

  const handleClick = (category) => {
    fetchData(category)
    navigate("/map")
    
  };


  return (
    <div className="">
      <ul className="flex space-x-10 justify-center text-xl p-4 f">
      <li>
          <button onClick={() => handleClick('school')}>School</button>
        </li>
        <li>
          <button onClick={() => handleClick('kindergarten')}>Kindergarten</button>
        </li>
        <li>
          <button onClick={() => handleClick('child')}>Child</button>
        </li>
        <li>
          <button onClick={() => handleClick('teenager')}>Teenager</button>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesPanel;
