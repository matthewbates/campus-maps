import { FormControlLabel, Switch } from "@mui/material";

import { ToggleContainer } from "./ToggleElements";

export const Toggle = ({ displayMarker, displayAllMarkers, toggleDisplay }) => {
  const toggleLabel = () => {
    if (displayAllMarkers) {
      return displayMarker ? "Hide building" : "Hide buildings";
    } else {
      return displayMarker ? "Show building" : "Show bulidings";
    }
  };
  return (
    <ToggleContainer>
      <FormControlLabel
        control={<Switch onChange={toggleDisplay} />}
        label={toggleLabel()}
      ></FormControlLabel>
    </ToggleContainer>
  );
};
