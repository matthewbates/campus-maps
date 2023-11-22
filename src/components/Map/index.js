import React, { useCallback, useState } from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Marker } from "../Marker";

import { containerStyle, mapOptions } from "../../utils/constants";

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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = displayMarker
    ? { lat: displayMarker.coordinates.lat, lng: displayMarker.coordinates.lng }
    : { lat: 39.677982, lng: -104.961877 };

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
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
          displayMarker={displayMarker}
          displayAllMarkers={displayAllMarkers}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </GoogleMap>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Loading...
    </div>
  );
};
