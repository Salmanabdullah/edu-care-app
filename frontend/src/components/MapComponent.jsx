import "leaflet/dist/leaflet.css";
import React,{useEffect,useState} from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import L from 'leaflet';

// Fix for default icon issues with webpack and react-leaflet
// import 'leaflet-defaulticon-compatibility';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const MapComponent = () => {
  
  
  return (
    <>
      <div className="flex">
        <div className="flex-none w-96">
          
        </div>
        <div className="flex-1">
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: '100vh', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Karl Marx <br /> Monument.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
