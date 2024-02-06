import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: white;
  top: 0;
  width: 100%;
  position: fixed; /* Ensures Navbar stays fixed at the top */
  z-index: 1000; /* Ensures Navbar appears above the map */
`;
