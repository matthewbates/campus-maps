import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";

import { TabWrapper, TabWrapperItem } from "./TabElements";

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
        <FullScreen toggle={toggle} />
      </Box>
      <TabsPanel>
        <TabWrapper>
          {information === "" ? (
            <div>Information coming soon!</div>
          ) : (
            <TabWrapperItem>{information}</TabWrapperItem>
          )}
          <div></div>
          <TabWrapperItem>{address}</TabWrapperItem>
          <TabWrapperItem>
            {typeof website === "string" && website === "" ? (
              <>Website coming soon!</>
            ) : (
              <a href={website} target={TARGET} rel={REL}>
                {website}
              </a>
            )}
          </TabWrapperItem>
        </TabWrapper>
      </TabsPanel>
    </TabContext>
  );
};
