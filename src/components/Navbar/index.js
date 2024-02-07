import { NavbarContainer } from "./NavbarElements";

import { Dropdown } from "../Dropdown";
import { Toggle } from "../Toggle";
import { MapSelect } from "../Select";

export const Navbar = ({
  selectedLocation,
  setSelectedLocation,
  handleMarkerSelection,
  displayMarker,
  displayAllMarkers,
  setDisplayAllMarkers,
  toggleDisplay,
}) => {
  return (
    <NavbarContainer>
      <Dropdown
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        handleMarkerSelection={handleMarkerSelection}
      />
      <MapSelect />
      <Toggle
        displayMarker={displayMarker}
        displayAllMarkers={displayAllMarkers}
        setDisplayAllMarkers={setDisplayAllMarkers}
        toggleDisplay={toggleDisplay}
      />
    </NavbarContainer>
  );
};
