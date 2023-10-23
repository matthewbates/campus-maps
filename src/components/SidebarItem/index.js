import {
  SidebarItemContainer,
  SidebarWrapper,
  SidebarItemImg,
  SidebarItemTitle,
  SidebarItemAddress,
} from "./SidebarItemElements";

export const SidebarItems = ({ name, img, address }) => {
  return (
    <SidebarItemContainer>
      <SidebarWrapper>
        <SidebarItemImg src={img} />
        <SidebarItemAddress>{address}</SidebarItemAddress>
      </SidebarWrapper>
    </SidebarItemContainer>
  );
};
