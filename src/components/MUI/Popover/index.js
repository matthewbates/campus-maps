import { useState } from "react";

import { Button as MuiButton, Popover as MuiPopover } from "@mui/material";

import { Tabs } from "../../Tabs";

export const Popover = ({ name, images, address, information, website }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          maxWidth: "225px",
          fontWeight: "bold",
          fontSize: "1.25em",
          position: "relative",
        }}
      >
        {name}
      </div>
      <MuiButton
        variant="contained"
        sx={{
          background: "#98012e",
          "&:hover": {
            background: "#a89968;",
          },
        }}
        onClick={handleClick}
      >
        more information
      </MuiButton>
      <MuiPopover
        // anchorReference="none"
        // sx={{
        //   width: "500px",
        //   position: "absolute",
        //   top: "50%",
        //   left: "50%",
        //   transform: "translate(-50%, -50%)",
        // }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Tabs
          images={images}
          name={name}
          address={address}
          information={information}
          website={website}
        />
      </MuiPopover>
    </>
  );
};
