import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  background: #212121;
  /* top: 80px; */
  height: 100vh;
  width: 100%;
  font-family: "Roboto";
  transition: 0.3s linear;

  @media screen and (min-width: 768px) {
    width: 40%;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  padding: 0.5em;
  align-items: center;
`;

export const SidebarTitle = styled.div`
  color: #ffffff;
  font-weight: bold;
  padding: 1em;
`;
