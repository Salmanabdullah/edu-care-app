import L from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useContext, useEffect, useMemo, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapContext } from "../context/mapContext";
import MyLocation from "./MyLocation";

const MapComponent = () => {
  const { data, category } = useContext(MapContext);
  console.log();
  const colors = useMemo(
    () => ({
      Schulen: "#583470",
      Kindertageseinrichtungen: "#5ba64c",
      Schulsozialarbeit: "#352da6",
      Jugendberufshilfen: "#c21d6a",
    }),
    []
  );
  const [myCustomColour, setMyCustomColour] = useState(colors["Schulen"]);

  // Update myCustomColour when category changes
  useEffect(() => {
    if (category && colors[category]) {
      setMyCustomColour(colors[category]);
    }
  }, [category, colors]);
  const markerHtmlStyles = `
    background-color: ${myCustomColour};
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`;

  const icon = L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${markerHtmlStyles}" />`,
  });

  return (
    <>
      <div className="">
        <div className=""></div>
        <div className="">
          {
            <MapContainer
              center={[50.8359, 12.9233]}
              zoom={11}
              style={{ height: "100vh", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {data.map((data, index) => (
                <Marker
                  icon={icon}
                  key={index}
                  position={[
                    data.geometry.coordinates[1],
                    data.geometry.coordinates[0],
                  ]}
                >
                  <Popup>
                    <table className="">
                      <tbody>
                        {Object.entries(data.properties).map(
                          ([key, value], idx) => (
                            <tr key={idx}>
                              <td>
                                <strong>{key}:</strong>
                              </td>
                              <td className="font-bold">{value}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                       
                    </table>
                    <div className="relative inline-block pt-4">
                      <button className="relative text-3xl float-right">
                        <FaRegStar />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
                          Mark as favorite
                        </span>
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
              <MyLocation />
            </MapContainer>
          }
        </div>
      </div>
    </>
  );
};

export default MapComponent;
