import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { SidebarContainer } from "./SidebarElements";

import { SidebarItems } from "../SidebarItem";

export const Sidebar = ({
  isOpen,
  setIsOpen,
  name,
  img,
  address,
  displayMarker,
  id,
  selectedLocation,
}) => {
  console.log(displayMarker, selectedLocation);
  return (
    <>
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
    </>
  );
};
