import { TabPanel } from "@mui/lab";

export const TabsPanel = ({ children }) => {
  return (
    <TabPanel
      value="2"
      sx={{
        display: "flex",
        textAlign: "justify",
        flexDirection: "column",
        gap: "1.5em",
      }}
    >
      {children}
    </TabPanel>
  );
};
