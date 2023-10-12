import React, { useCallback, useState } from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Marker } from "../Marker";

import { containerStyle } from "../../utils/constants";

export const Map = ({ displayMarkers, toggleSidebar, isOpen }) => {
  const [map, setMap] = useState(null);

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
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={16}
    >
      {displayMarkers && (
        <Marker toggleSidebar={toggleSidebar} isOpen={isOpen} />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};
