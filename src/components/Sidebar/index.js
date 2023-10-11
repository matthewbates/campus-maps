import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { SidebarContainer } from "./SidebarElements";

import { SidebarItems } from "../SidebarItems";

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <ArrowBackIcon
        onClick={toggleSidebar}
        sx={{
          fontSize: "2em",
          padding: "0.5em",
          cursor: "pointer",
          color: "#ffffff",
        }}
      />
    </SidebarContainer>
  );
};
