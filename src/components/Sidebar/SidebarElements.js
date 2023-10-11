import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  height: 100vh;
  transition: 0.5s ease;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
`;
