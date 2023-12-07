import styled from "styled-components";

export const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0.5em;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
