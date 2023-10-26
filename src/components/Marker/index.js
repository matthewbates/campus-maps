import { MarkerF } from "@react-google-maps/api";

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
  return (
    <>
      {locations.map(({ id, name, img, address, coordinates }) => (
        <MarkerF
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
          // (selectedLocation === id && displayMarker) ? (
          selectedLocation === id ? (
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
