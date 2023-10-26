import {
  SidebarItemContainer,
  SidebarWrapper,
  SidebarItemImg,
  SidebarItemAddress,
} from "./SidebarItemElements";

export const SidebarItems = ({ name, img, address }) => {
  return (
    <SidebarItemContainer>
      <SidebarWrapper>
        <SidebarItemImg src={img} alt={name} />
        <SidebarItemAddress>{address}</SidebarItemAddress>
      </SidebarWrapper>
    </SidebarItemContainer>
  );
};
