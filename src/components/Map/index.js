import React, { useCallback, useState } from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Marker } from "../Marker";

import { containerStyle, mapOptions } from "../../utils/constants";
import { locations } from "../../utils/locations";

export const Map = ({
  displayMarker,
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
    <div style={{ display: "flex", zIndex: 1 }}>
      <GoogleMap
        options={mapOptions}
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          map={map}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          locations={filteredLocations}
          displayMarker={displayMarker}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};
