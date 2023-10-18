import styled from "styled-components";

export const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1em;
`;

export const SidebarItemImg = styled.img`
  display: flex;
  width: 100%;

  @media screen and (min-width: 768px) {
    /* width: 80%; */
  }
`;

export const SidebarItemTitle = styled.div`
  font-size: 2em;
  color: #ffffff;
  text-decoration: underline;
`;

export const SidebarItemAddress = styled.div`
  color: #ffffff;
`;
