import { useState } from "react";

import { MarkerF } from "@react-google-maps/api";

import { Sidebar } from "../Sidebar";
import { Window } from "../Window";

import { locations } from "../../utils/locations";
import { toggleSidebar, filteredLocations } from "../../utils/helpers";

import LOGO from "../../assets/marker/logo.png";

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

  const customLogo = {
    url: LOGO,
    scaledSize: new window.google.maps.Size(30, 30),
  };

  return (
    <>
      {filteredLocations(displayAllMarkers, locations, selectedLocation).map(
        ({ id, name, images, address, coordinates, information, website }) => (
          <MarkerF
            icon={customLogo}
            // onMouseOver={() => {
            //   setTimeout(() => setShowInfoWindow(id), 250);
            // }}
            // onMouseOut={() => {
            //   setTimeout(() => setShowInfoWindow(null), 2500);
            // }}
            onClick={() => {
              setShowInfoWindow(id);
              // toggleSidebar(isOpen, setIsOpen);
              setSelectedLocation(id);
            }}
            key={id}
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
                information={information}
                website={website}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                displayMarker={displayMarker}
                selectedLocation={selectedLocation}
              />
            ) : null}
            {showInfoWindow === id && (
              <Window
                coordinates={coordinates}
                images={images}
                address={address}
                information={information}
                website={website}
                map={map}
                name={name}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                id={id}
                setSelectedLocation={setSelectedLocation}
              />
            )}
          </MarkerF>
        )
      )}
    </>
  );
};
