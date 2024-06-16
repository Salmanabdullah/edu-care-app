import L from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useContext, useEffect, useMemo, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapContext } from "../../context/mapContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFavorite from "../../hooks/useFavorite";
import MyLocation from "./MyLocation";

//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MapComponent = () => {
  const { data, category } = useContext(MapContext);
  const { user } = useAuthContext();
  const { addFavorite, removeFavorite } = useFavorite();
  const [favorites, setFavorites] = useState([]);
  
  const colors = useMemo(
    () => ({
      Schulen: "#583470",
      Kindertageseinrichtungen: "#2a8041",
      Schulsozialarbeit: "#352da6",
      Jugendberufshilfen: "#b0423c",
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
    border-radius: 2rem 3rem 0 3rem;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`;

  const defaultIcon = L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${markerHtmlStyles}" />`,
  });

  // Marker icon for favorite state
  const favoriteIcon = L.divIcon({
    className: "my-custom-pin favorite",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="background-color: #FFD700; 
            width: 3rem; 
            height: 3rem; 
            display: block; 
            left: -1.5rem; 
            top: -1.5rem; 
            position: relative; 
            border-radius: 3rem 3rem 0; 
            transform: rotate(45deg); 
            border: 1px solid #FFFFFF;">
            </span>`,
  });

  const notify = () => {
    toast.success("Marked as favorite successfully!", {
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notifyRemove = () => {
    toast.info("Removed from favorites", {
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleFavorite = async (itemId) => {
    if (!user) {
      alert("Please sign in to mark this as favorite.");
      return;
    }

    try {
      await addFavorite(itemId);
      setFavorites([...favorites, itemId]);
      notify();
    } catch (error) {
      console.error("Failed to mark as favorite:", error);
      alert("Failed to mark as favorite. Please try again.");
    }
  };

  const handleRemoveFavorite = async (itemId) => {
    if (!user) {
      alert("Please sign in to remove this favorite.");
      return;
    }

    try {
      await removeFavorite(itemId);
      setFavorites(favorites.filter((id) => id !== itemId));
      notifyRemove();
    } catch (error) {
      console.error("Failed to remove favorite:", error.message);
    }
  };

  const isFavorite = (itemId) => {
    return favorites.includes(itemId);
  };

  return (
    <>
      <div>
        <div>
          {
            <MapContainer
              center={[50.8359, 12.9233]}
              zoom={12}
              style={{ height: "100vh", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {data.map((data, index) => (
                <Marker
                  icon={isFavorite(data._id)?favoriteIcon:defaultIcon}
                  key={index}
                  position={[
                    data.geometry.coordinates[1],
                    data.geometry.coordinates[0],
                  ]}
                >
                  <Popup>
                    <table>
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
                    <div className="flex justify-center">
                      <button
                        className=" text-4xl pt-8 group"
                        onClick={() =>
                          isFavorite(data._id)
                            ? handleRemoveFavorite(data._id)
                            : handleFavorite(data._id)
                        }
                      >
                        {isFavorite(data._id) ? <FaStar /> : <FaRegStar />}
                        <span className="absolute bottom-3 left-50 transform -translate-x-1/2 -translate-y-10 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {isFavorite(data._id)
                            ? "Unmark favorite"
                            : "Mark as favorite"}
                        </span>
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
              <MyLocation />
              <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
              />
            </MapContainer>
          }
        </div>
      </div>
    </>
  );
};

export default MapComponent;
