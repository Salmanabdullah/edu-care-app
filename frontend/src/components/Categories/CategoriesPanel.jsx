import React, { useContext } from "react";
//import MapComponent from "../MapComponent";
import { useNavigate } from "react-router-dom";
import { MapContext } from "../../context/mapContext";
import MyLocation from "../MyLocation";

const CategoriesPanel = () => {
  const navigate = useNavigate();
  const { fetchData } = useContext(MapContext);

  const handleClick = (category) => {
    fetchData(category);
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="text-xl p-4 basis-1/4 ">
          <button onClick={()=>{<MyLocation />}}>Find Me</button>
        </div>
        <div className="basis-1/2">
          <ul className="flex space-x-10 justify-center text-xl p-4">
            <li>
              <button onClick={() => handleClick("school")}>School</button>
            </li>
            <li>
              <button onClick={() => handleClick("kindergarten")}>
                Kindergarten
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("child")}>Child</button>
            </li>
            <li>
              <button onClick={() => handleClick("teenager")}>Teenager</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesPanel;
