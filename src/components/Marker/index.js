import { useState } from "react";

import { MarkerF } from "@react-google-maps/api";

import { Sidebar } from "../Sidebar";
import { Window } from "../Window";

import { locations } from "../../utils/locations";
import { toggleSidebar, filteredLocations } from "../../utils/helpers";

export const Marker = ({
  map,
  isOpen,
  setIsOpen,
  displayMarker,
  displayAllMarkers,
  selectedLocation,
  setSelectedLocation,
}) => {
  const [showInfoWindow, setShowInfoWindow] = useState(null);

  return (
    <>
      {filteredLocations(displayAllMarkers, locations, selectedLocation).map(
        ({ id, name, images, address, coordinates }) => (
          <MarkerF
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: "white",
              fillOpacity: 1,
              scale: window.innerWidth > 600 ? 10 : 8,
              strokeColor: "#8a1538",
              strokeWeight: 8,
            }}
            onMouseOver={() => {
              setShowInfoWindow(id);
            }}
            onMouseOut={() => {
              setShowInfoWindow(null);
            }}
            onClick={() => {
              toggleSidebar(isOpen, setIsOpen);
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
                images={images}
                address={address}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                displayMarker={displayMarker}
                selectedLocation={selectedLocation}
              />
            ) : null}

            {showInfoWindow === id && !displayMarker && (
              <Window coordinates={coordinates} map={map} name={name} />
            )}
          </MarkerF>
        )
      )}
    </>
  );
};
