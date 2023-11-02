import { useState } from "react";

import { Box, Tabs, Tab } from "@mui/material";

import {
  SidebarItemContainer,
  SidebarWrapper,
  SidebarItemAddress,
  SidebarInfoWrapper,
} from "./SidebarItemElements";

import { Carousel } from "../Carousel";
import { FullScreen } from "../FullScreen";

export const SidebarItems = ({ name, images, address }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <SidebarItemContainer>
      <SidebarWrapper>
        <Carousel fullScreen={fullScreen} images={images} name={name} />
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            bgcolor: "background.paper",
          }}
        >
          <Tabs centered onChange={(e, newValue) => setTabValue(newValue)}>
            <Tab label="photos" />
            <Tab label="information" />
          </Tabs>
        </Box>
        {tabValue === 1 && (
          <SidebarInfoWrapper>
            <SidebarItemAddress>{address}</SidebarItemAddress>
            <FullScreen toggle={toggleFullScreen} />
          </SidebarInfoWrapper>
        )}
      </SidebarWrapper>
    </SidebarItemContainer>
  );
};
