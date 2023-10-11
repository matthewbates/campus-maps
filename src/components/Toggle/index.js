import { useState } from "react";

import { FormControlLabel, Switch } from "@mui/material";

import { ToggleContainer } from "./ToggleElements";

export const Toggle = ({ displayMarkers, toggleDisplay }) => {
  return (
    <ToggleContainer>
      <FormControlLabel
        control={<Switch onChange={toggleDisplay} />}
        label={displayMarkers === true ? "Hide buildings" : "Show buildings"}
      ></FormControlLabel>
    </ToggleContainer>
  );
};
