import { MarkerF } from "@react-google-maps/api";

import { Sidebar } from "../Sidebar";

import { locations } from "../../utils/locations";
import { toggleSidebar } from "../../utils/helpers";

export const Marker = ({
  isOpen,
  setIsOpen,
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
          }}
          key={id}
          position={{ lat: coordinates.lat, lng: coordinates.lng }}
        >
          {selectedLocation === id && (
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
