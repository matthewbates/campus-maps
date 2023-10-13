import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { SidebarContainer } from "./SidebarElements";

import { SidebarItems } from "../SidebarItem";
import { SettingsInputComponent } from "@mui/icons-material";

export const Sidebar = ({
  isOpen,
  setIsOpen,
  toggleSidebar,
  name,
  img,
  address,
}) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <ArrowBackIcon
        onClick={() => setIsOpen(false)}
        sx={{
          fontSize: "2em",
          padding: "0.5em",
          cursor: "pointer",
          color: "#ffffff",
        }}
      />
      {<SidebarItems name={name} img={img} address={address} />}
    </SidebarContainer>
  );
};
