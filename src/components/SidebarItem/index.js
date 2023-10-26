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
        <SidebarItemImg
          src={require("../../assets/anderson_academic_commons.jpeg")}
          alt={name}
        />
        <SidebarItemAddress>{address}</SidebarItemAddress>
      </SidebarWrapper>
    </SidebarItemContainer>
  );
};
