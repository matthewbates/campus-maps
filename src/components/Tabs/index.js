import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { Carousel } from "../Carousel";

const TARGET = "_blank";
const REL = "noopener noreferrer";

export const Tabs = ({
  images,
  name,
  address,
  information,
  website,
}) => {
  const [tabValue, setTabValue] = useState("1");

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
        <Carousel images={images} name={name} />
        <TabList
          sx={{ marginBottom: "0.5em" }}
          selectionFollowsFocus
          onChange={handleChange}
        >
          <Tab label="Photos" value="1" />
          <Tab label="Information" value="2" />
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
          <Box sx={{ marginTop: "1em" }}>{address}</Box>
          <div style={{ marginTop: "1em" }}>
            <a href={website} target={TARGET} rel={REL}>
              Visit website
            </a>
          </div>
        </TabPanel>
      </Box>
    </TabContext>
  );
};
