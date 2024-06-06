import "leaflet/dist/leaflet.css";
import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapContext } from "../context/mapContext";


// import 'leaflet-defaulticon-compatibility';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const MapComponent = () => {
  const position = [50.8359, 12.9233]; // Default position for the map
  const { data } = useContext(MapContext);

  return (
    <>
      <div className="">
        <div className=""></div>
        <div className="">
          { (
            <MapContainer
              center={position}
              zoom={11}
              style={{ height: "100vh", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {data.map((data, index) => (
                <Marker
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
                              <td>{value}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default MapComponent;
