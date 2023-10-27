import styled from "styled-components";

export const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Roboto";
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1em;
  padding: 1em;
`;

export const SidebarItemImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 300px;
  border: 2px solid white;

  @media screen and (min-width: 600px) {
    /* max-width: 100%; */
    max-height: 200px;
  }
`;

export const SidebarItemTitle = styled.div`
  font-size: 2em;
  color: #ffffff;
  text-decoration: underline;
`;

export const SidebarItemAddress = styled.div`
  color: #ffffff;
  font-style: italic;
`;
