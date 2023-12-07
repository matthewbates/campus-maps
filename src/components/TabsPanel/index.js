import { TabPanel } from "@mui/lab";

export const TabsPanel = ({ children }) => {
  return (
    <TabPanel
      value="2"
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
        gap: "1.5em",
        color: "#ffffff",
        fontSize: "1.1em",
      }}
    >
      {children}
    </TabPanel>
  );
};
