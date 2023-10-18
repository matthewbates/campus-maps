import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  height: 100vh;
  width: 100%;
  border: 2px solid white;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
`;
