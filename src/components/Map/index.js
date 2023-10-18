import React, { useCallback, useState } from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Marker } from "../Marker";

import { containerStyle } from "../../utils/constants";
import { locations } from "../../utils/locations";

export const Map = ({
  displayMarker,
  setDisplayMarker,
  displayAllMarkers,
  selectedLocation,
  setSelectedLocation,
}) => {
  const [map, setMap] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: "AIzaSyB480SbxWwFx84obwsruZkCeLBIgJOcEVY",
  });

  // const center = { lat: 39.677982, lng: -104.961877 };
  const center = displayMarker
    ? { lat: displayMarker.coordinates.lat, lng: displayMarker.coordinates.lng }
    : { lat: 39.677982, lng: -104.961877 };

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  });

  const filteredLocations = displayAllMarkers
    ? locations
    : locations.filter((location) => location.id === selectedLocation);

  return isLoaded ? (
    <div style={{ display: "flex" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        zoom={16}
      >
        <Marker
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          locations={filteredLocations}
          displayMarker={displayMarker}
          displayAllMarkers={displayAllMarkers}
          setDisplayMarker={setDisplayMarker}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};
