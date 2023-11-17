import { useState } from "react";

import { SidebarItemContainer, SidebarWrapper } from "./SidebarItemElements";

import { Carousel } from "../Carousel";
import { Tabs } from "../Tabs";

export const SidebarItems = ({
  name,
  images,
  address,
  information,
  website,
}) => {
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <SidebarItemContainer>
      <SidebarWrapper>
        <Carousel fullScreen={fullScreen} images={images} name={name} />
        <Tabs
          images={images}
          toggle={toggleFullScreen}
          address={address}
          information={information}
          website={website}
        />
      </SidebarWrapper>
    </SidebarItemContainer>
  );
};
