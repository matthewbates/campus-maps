import { MarkerF } from "@react-google-maps/api";

import { Sidebar } from "../Sidebar";

// import { locations } from "../../utils/locations";
import { toggleSidebar } from "../../utils/helpers";

export const Marker = ({
  isOpen,
  setIsOpen,
  locations,
  displayMarker,
  displayAllMarkers,
  selectedLocation,
  setSelectedLocation,
}) => {
  return (
    <>
      {locations.map(({ id, name, img, address, coordinates }) => (
        <MarkerF
          onClick={() => {
            toggleSidebar(isOpen, setIsOpen);
            setSelectedLocation(id);
            console.log(displayMarker);
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
          {displayMarker.id === id && (
            <Sidebar
              name={name}
              img={img}
              address={address}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          )}
        </MarkerF>
      ))}
    </>
  );
};
