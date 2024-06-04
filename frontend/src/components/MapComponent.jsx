import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// Fix for default icon issues with webpack and react-leaflet
// import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const MapComponent = () => {
  const position = [50.8359, 12.9233]; // Default position for the map

  return (
    <MapContainer center={position} zoom={13} style={{ height: '70vh', width: '100%', margin: 'auto' }}>
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
  );
};

export default MapComponent;