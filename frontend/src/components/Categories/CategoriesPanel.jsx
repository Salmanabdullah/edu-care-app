import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MapContext } from "../../context/mapContext";

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
        <div className="text-xl p-4 basis-1/4 "></div>
        <div className="basis-1/2">
          <ul className="flex space-x-10 justify-center text-xl p-4">
            <li>
              <button
                className="text-white p-2 rounded-md hover:bg-gray-500"
                onClick={() => handleClick("school")}
              >
                School
              </button>
            </li>
            <li>
              <button
                className="text-white p-2 rounded-md hover:bg-gray-500"
                onClick={() => handleClick("kindergarten")}
              >
                Kindergarten
              </button>
            </li>
            <li>
              <button
                className="text-white p-2 rounded-md hover:bg-gray-500"
                onClick={() => handleClick("child")}
              >
                Child
              </button>
            </li>
            <li>
              <button
                className="text-white p-2 rounded-md hover:bg-gray-500"
                onClick={() => handleClick("teenager")}
              >
                Teenager
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesPanel;
