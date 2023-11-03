import { useState } from "react";

import {
  SidebarItemContainer,
  SidebarWrapper,
  SidebarItemAddress,
  SidebarInfoWrapper,
} from "./SidebarItemElements";

import { Carousel } from "../Carousel";
import { FullScreen } from "../FullScreen";
import { Tabs } from "../Tabs";

export const SidebarItems = ({ name, images, address }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <SidebarItemContainer>
      <SidebarWrapper>
        <Carousel fullScreen={fullScreen} images={images} name={name} />
        <Tabs toggle={toggleFullScreen} address={address} />
      </SidebarWrapper>
    </SidebarItemContainer>
  );
};
