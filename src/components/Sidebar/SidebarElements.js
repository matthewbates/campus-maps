import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  /* background: rgba(0, 0, 0, 0.95); */
  background: #121212;
  top: 0;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SidebarTitle = styled.div`
  color: #ffffff;
  font-weight: bold;
`;
