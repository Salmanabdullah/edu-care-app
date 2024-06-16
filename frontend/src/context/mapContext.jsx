import { createContext, useState } from "react";

const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [category, setCatetogy] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: "GET",
      });
      const json = await response.json();
      const name = json[0].name
      const plots = json[0].features;      
      
      setCatetogy(name)
      setData(plots);

    } catch (error) {
      console.error("Error fetching requested data", error);
    }
  };

  return (
    <MapContext.Provider value={{ data, category, fetchData }}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider };
