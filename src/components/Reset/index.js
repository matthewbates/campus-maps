import { Button } from "@mui/material";

export const Reset = ({ variant, sx, setDisplayAllMarkers, toggleDisplay }) => {
  return (
    <Button
      onClick={() => {
        setDisplayAllMarkers(false); // Reset displayAllMarkers
        toggleDisplay(); // Toggle the toggleDisplay state
      }}
      variant={variant}
      sx={sx}
    >
      Reset
    </Button>
  );
};
