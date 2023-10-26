import { useState } from "react";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarTitle,
} from "./SidebarElements";

import { SidebarItems } from "../SidebarItem";
import { toggleSidebar } from "../../utils/helpers";

export const Sidebar = ({ isOpen, setIsOpen, name, img, address }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleMouse = () => {
    setIsHovered(!isHovered);
  };

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarWrapper>
        <ArrowCircleLeftIcon
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => toggleSidebar(isOpen, setIsOpen)}
          sx={{
            fontSize: "2em",
            cursor: "pointer",
            color: isHovered === true ? "lightgray" : "#ffffff",
            transition: "0.3s ease;",
          }}
        />
        <SidebarTitle>{name}</SidebarTitle>
      </SidebarWrapper>
      {<SidebarItems name={name} img={img} address={address} />}
    </SidebarContainer>
  );
};
