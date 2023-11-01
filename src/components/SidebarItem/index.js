import {
  SidebarItemContainer,
  SidebarWrapper,
  SidebarItemImg,
  SidebarItemAddress,
} from "./SidebarItemElements";

import { Carousel } from "../Carousel";

export const SidebarItems = ({ name, images, address }) => {
  return (
    <SidebarItemContainer>
      <SidebarWrapper>
        <Carousel images={images} name={name} />
        {/* {Array.isArray(images) ? (
          images.map((image) => <SidebarItemImg src={image} alt={name} />)
        ) : (
          <SidebarItemImg src={images} />
        )} */}
        <SidebarItemAddress>{address}</SidebarItemAddress>
      </SidebarWrapper>
    </SidebarItemContainer>
  );
};
