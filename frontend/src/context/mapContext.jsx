import { createContext, useState } from "react";

const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: "GET",
      });
      const json = await response.json();
      console.log(json);
      const plots = json[0].features;
     

      setData(plots);
      //setMapVisible(true);
    } catch (error) {
      console.error("Error fetching requested data", error);
    }
  };

  return (
    <MapContext.Provider value={{ data, fetchData }}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider };
