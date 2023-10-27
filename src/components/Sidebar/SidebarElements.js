import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  background: #212121;
  height: 100vh;
  width: 100%;
  font-family: "Roboto";
  transition: 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 40%;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
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
