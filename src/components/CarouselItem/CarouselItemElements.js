import styled from "styled-components";

export const CarouselItemContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  color: #ffffff;
`;

export const CarouselItemImg = styled.img`
  width: 450px;
  height: 200px;
  object-fit: cover;
  display: ${({ $index, $activeIndex }) =>
    $index === $activeIndex ? "block" : "none"};

  @media screen and (min-width: 600px) {
    height: 300px;
  }
`;
