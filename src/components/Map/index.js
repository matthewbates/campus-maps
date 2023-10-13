import React, { useCallback, useState } from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Marker } from "../Marker";

import { containerStyle } from "../../utils/constants";

export const Map = ({
  displayMarkers,
  selectedLocation,
  setSelectedLocation,
}) => {
  const [map, setMap] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: "AIzaSyB480SbxWwFx84obwsruZkCeLBIgJOcEVY",
  });
  const center = { lat: 39.677982, lng: -104.961877 };

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  });

  return isLoaded ? (
    <div style={{ display: "flex" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        zoom={16}
      >
        {displayMarkers && (
          <Marker
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};
