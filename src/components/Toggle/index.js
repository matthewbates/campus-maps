import { FormControlLabel, Switch } from "@mui/material";
import { Reset } from "../Reset";

import { ToggleContainer } from "./ToggleElements";

export const Toggle = ({
  displayMarker,
  displayAllMarkers,
  setDisplayAllMarkers,
  toggleDisplay,
}) => {
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
      {/* <Reset
        setDisplayAllMarkers={setDisplayAllMarkers}
        toggleDisplay={toggleDisplay}
        variant="contained"
        sx={{}}
      /> */}
    </ToggleContainer>
  );
};
