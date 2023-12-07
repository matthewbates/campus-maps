import { InfoWindowF } from "@react-google-maps/api";

import { toggleSidebar } from "../../utils/helpers";

export const Window = ({
  coordinates,
  name,
  isOpen,
  setIsOpen,
  id,
  setSelectedLocation,
}) => {
  return (
    <InfoWindowF
      position={{ lat: coordinates.lat + 0.0003, lng: coordinates.lng }}
    >
      <div
        style={{
          fontWeight: "bold",
          padding: "0.5em",
          fontSize: "16px",
          fontFamily: "Roboto",
        }}
      >
        {name}
        <button
          onClick={() => {
            toggleSidebar(isOpen, setIsOpen);
            setSelectedLocation(id);
          }}
        >
          More info
        </button>
      </div>
    </InfoWindowF>
  );
};
