import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Circle, Marker, Popup, useMap, useMapEvents  } from "react-leaflet";

// Component to handle geolocation
const MyLocation = () => {
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 12, enableHighAccuracy: true });

    const onLocationFound = (e) => {
      setPosition(e.latlng);
      setAccuracy(e.accuracy / 10);
    };

    map.on("locationfound", onLocationFound);

    return () => {
      map.off("locationfound", onLocationFound);
    };
  }, [map]);

  useMapEvents({
    click: (e) => {
      map.setView(e.latlng, 12, { animate: true });
    }
  });

  return position === null ? null : (
    <>
      <Marker position={position}>
        <Popup>You are within {accuracy.toFixed(2)} meters from this point</Popup>
      </Marker>
      <Circle center={position} radius={accuracy} />
    </>
  );
};

export default MyLocation;
