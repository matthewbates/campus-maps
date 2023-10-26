import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  z-index: 2;
  top: 0;
  position: sticky;
  height: 80px;

  @media screen and (max-width: 490px) {
    flex-direction: column;
  }
`;
