import styled from "styled-components";

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: #ffffff;

  div:nth-child(2) {
    width: 100%;
    height: 2px;
    background: #ffffff;
  }
`;

export const TabWrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  a {
    color: #ffffff;
  }
`;
