import { useState } from "react";

import { MarkerF, InfoWindowF } from "@react-google-maps/api";

import { Sidebar } from "../Sidebar";

import { toggleSidebar } from "../../utils/helpers";

export const Marker = ({
  map,
  isOpen,
  setIsOpen,
  locations,
  displayMarker,
  selectedLocation,
  setSelectedLocation,
}) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const handleMouseOver = () => {
    setShowInfoWindow(true);
    console.log("Mouse is hovering over the marker");
  };

  const handleMouseLeave = () => {
    setShowInfoWindow(false);
    console.log("Mouse is leaving the marker");
  };

  return (
    <>
      {locations.map(({ id, name, img, address, coordinates }) => (
        <MarkerF
          onMouseOver={handleMouseOver}
          onClick={() => {
            toggleSidebar(isOpen, setIsOpen);
            setIsOpen(!isOpen);
            setSelectedLocation(id);
          }}
          key={id}
          //! add feature to clear selection so displayAllMarkers works
          position={
            displayMarker
              ? {
                  lat: displayMarker.coordinates.lat,
                  lng: displayMarker.coordinates.lng,
                }
              : { lat: coordinates.lat, lng: coordinates.lng }
          }
        >
          {(displayMarker && displayMarker.id === id) ||
          (selectedLocation === id && !displayMarker) ? (
            <Sidebar
              name={name}
              img={img}
              address={address}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              displayMarker={displayMarker}
              selectedLocation={selectedLocation}
            />
          ) : null}
        </MarkerF>
      ))}
    </>
  );
};
