import styled from "styled-components";

export const CarouselItemContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const CarouselItemImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 300px;
  display: ${({ index, activeIndex }) =>
    index === activeIndex ? "inline-block" : "none"};

  @media screen and (min-width: 600px) {
    max-height: 200px;
  }
`;
