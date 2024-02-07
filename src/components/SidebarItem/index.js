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
  return (
    <SidebarItemContainer>
      <SidebarWrapper>
        <Carousel images={images} name={name} />
        <Tabs
          images={images}
          name={name}
          address={address}
          information={information}
          website={website}
        />
      </SidebarWrapper>
    </SidebarItemContainer>
  );
};
