import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  z-index: 2;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
