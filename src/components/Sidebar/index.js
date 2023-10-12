import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { SidebarContainer } from "./SidebarElements";

import { SidebarItems } from "../SidebarItem";

export const Sidebar = ({ isOpen, toggleSidebar, location }) => {
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
      <SidebarItems location={location} />
    </SidebarContainer>
  );
};
