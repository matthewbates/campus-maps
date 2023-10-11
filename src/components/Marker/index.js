import { useState } from "react";

import { MarkerF } from "@react-google-maps/api";

import { locations } from "../../utils/buildings";

export const Marker = ({ toggleSidebar }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const toggleSelected = (id) => {
    
    
  };

  return (
    <>
      {locations.map(({ id, name, category, address, coordinates }) => (
        <MarkerF
          onClick={toggleSidebar}
          key={id}
          position={{ lat: coordinates.lat, lng: coordinates.lng }}
        />
      ))}
    </>
  );
};
