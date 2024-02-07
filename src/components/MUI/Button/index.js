import { Button as MuiButton } from "@mui/material";

export const Button = ({ sx, variant, onClick, children }) => {
  return (
    <MuiButton sx={sx} variant={variant} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
