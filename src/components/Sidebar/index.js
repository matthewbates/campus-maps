import { useState, useEffect, useRef } from "react";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarTitle,
} from "./SidebarElements";

import { SidebarItems } from "../SidebarItem";
import { toggleSidebar } from "../../utils/helpers";
import { useClickOutside } from "../../utils/hooks";

export const Sidebar = ({
  isOpen,
  setIsOpen,
  name,
  images,
  address,
  information,
  website,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const sidebarRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  return (
    <SidebarContainer $isOpen={isOpen} ref={sidebarRef}>
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
      {
        <SidebarItems
          name={name}
          images={images}
          address={address}
          information={information}
          website={website}
        />
      }
    </SidebarContainer>
  );
};
