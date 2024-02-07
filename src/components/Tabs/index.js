import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { Carousel } from "../Carousel";

import { TARGET, REL } from "../../utils/constants";
import { ToggleScreen } from "../MUI/ToggleScreen";

export const Tabs = ({ images, name, address, information, website }) => {
  const [tabValue, setTabValue] = useState("1");
  const [fullScreen, setFullScreen] = useState(false);

  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };

  return (
    <TabContext value={tabValue}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Carousel fullScreen={fullScreen} images={images} name={name} />
        <TabList
          sx={{ marginBottom: "0.5em" }}
          selectionFollowsFocus
          onChange={handleChange}
        >
          <Tab label="Photos" value="1" />
          <Tab label="Information" value="2" />
          <ToggleScreen fullScreen={fullScreen} setFullScreen={setFullScreen} />
        </TabList>
        <TabPanel value="2">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "400px",
            }}
          >
            {information}
          </Box>
          <Box sx={{ marginTop: "1em", fontStyle: "italic" }}>{address}</Box>
          <div style={{ marginTop: "1em" }}>
            <a
              style={{ color: "#000000" }}
              href={website}
              target={TARGET}
              rel={REL}
            >
              Visit website
            </a>
          </div>
        </TabPanel>
      </Box>
    </TabContext>
  );
};
