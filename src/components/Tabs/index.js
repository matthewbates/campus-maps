import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";

import { InformationDivider, TabWebsite, TabWebsiteA } from "./TabElements";

import { FullScreen } from "../FullScreen";
import { TabsPanel } from "../TabsPanel";

const TARGET = "_blank";
const REL = "noopener noreferrer";

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
        {/* <FullScreen toggle={toggle} /> */}
      </Box>
      <TabsPanel>
        {information === "" ? (
          <div>Information coming soon!</div>
        ) : (
          <>{information}</>
        )}
        <InformationDivider />
        <>{address}</>
        {website !== "" && (
          <TabWebsite>
            <TabWebsiteA href={website} target={TARGET} rel={REL}>
              More information
            </TabWebsiteA>
          </TabWebsite>
        )}
      </TabsPanel>
    </TabContext>
  );
};
