import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  z-index: 2;
  top: 0;
  position: sticky;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
