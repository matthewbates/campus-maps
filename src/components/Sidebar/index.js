import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarTitle,
} from "./SidebarElements";

import { SidebarItems } from "../SidebarItem";

export const Sidebar = ({ isOpen, setIsOpen, name, img, address }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarWrapper>
        <ArrowBackIcon
          onClick={() => setIsOpen(false)}
          sx={{
            fontSize: "2em",
            padding: "0.5em",
            cursor: "pointer",
            color: "#ffffff",
          }}
        />
        <SidebarTitle>{name}</SidebarTitle>
      </SidebarWrapper>
      {<SidebarItems name={name} img={img} address={address} />}
    </SidebarContainer>
  );
};
