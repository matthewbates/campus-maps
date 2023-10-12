import { useState } from "react";

import { MarkerF } from "@react-google-maps/api";

import { Sidebar } from "../Sidebar";

import { locations } from "../../utils/buildings";

export const Marker = ({ toggleSidebar, isOpen }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const toggleSelected = (id) => {
    setSelectedLocation(id);
    toggleSidebar();
  };

  return (
    <>
      {locations.map(({ id, name, category, address, coordinates }) => (
        <MarkerF
          onClick={() => {
            toggleSelected(id);
            console.log(name);
          }}
          key={id}
          position={{ lat: coordinates.lat, lng: coordinates.lng }}
        >
          {isOpen && selectedLocation === id && (
            <Sidebar
              location={locations.find(
                (location) => location.id === selectedLocation
              )}
            />
          )}
        </MarkerF>
      ))}
    </>
  );
};
