import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { TabWrapper, TabWrapperItem } from "./TabElements";

import { FullScreen } from "../FullScreen";

export const Tabs = ({ address, toggle, information, website }) => {
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
      <TabPanel
        value="2"
        sx={{
          display: "flex",
          textAlign: "justify",
          flexDirection: "column",
          gap: "1.5em",
        }}
      >
        <TabWrapper>
          {typeof information === "string" && information === "" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              Information coming soon!
            </div>
          ) : (
            <TabWrapperItem>{information}</TabWrapperItem>
          )}
          <div></div>
          <TabWrapperItem>{address}</TabWrapperItem>
          <TabWrapperItem>
            <a
              href="https://www.du.edu/duhealth"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </TabWrapperItem>
        </TabWrapper>
      </TabPanel>
    </TabContext>
  );
};
