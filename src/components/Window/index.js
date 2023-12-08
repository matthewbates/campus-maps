import { InfoWindowF } from "@react-google-maps/api";

import { WindowItems } from "./WindowElements";

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
    <InfoWindowF position={{ lat: coordinates.lat, lng: coordinates.lng }}>
      <WindowItems>
        {name}
        <button></button>
        {/* <div
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
      </div> */}
      </WindowItems>
    </InfoWindowF>
  );
};
