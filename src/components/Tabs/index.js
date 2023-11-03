import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { TabWrapper } from "./TabElements";

import { FullScreen } from "../FullScreen";

export const Tabs = ({ address, toggle }) => {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };
  return (
    <TabContext value={tabValue}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2em",
          justifyContent: "center",
        }}
      >
        <TabList
          selectionFollowsFocus
          onChange={handleChange}
          aria-label="tab list"
        >
          <Tab sx={{ color: "white" }} label="Photos" value="1" />
          <Tab sx={{ color: "white" }} label="Information" value="2" />
        </TabList>
        <FullScreen toggle={toggle} />
      </Box>
      <TabPanel value="2">
        <TabWrapper>{address}</TabWrapper>
      </TabPanel>
    </TabContext>
  );
};
