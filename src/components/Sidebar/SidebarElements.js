import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  top: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  background: #212121;
  height: 100vh;
  width: 100%;
  transition: 0.3s ease;
  overflow: auto;

  @media screen and (min-width: 800px) {
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  margin-left: 1em;
`;

export const SidebarTitle = styled.div`
  color: #ffffff;
  font-weight: bold;
  padding: 1em;
`;
