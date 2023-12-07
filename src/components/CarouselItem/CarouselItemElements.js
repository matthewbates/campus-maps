import styled from "styled-components";

export const CarouselItemContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: #ffffff;
`;

export const CarouselItemImg = styled.img`
  width: 100%;
  /* position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px; */
  /* width; ${({ fullScreen }) => (fullScreen ? "100vw" : "100%")}; */
  /* height: auto; */
  object-fit: cover;
  height: 250px;
  display: ${({ $index, $activeIndex }) =>
    $index === $activeIndex ? "block" : "none"};

  @media screen and (min-width: 600px) {
    height: 300px;
  }
`;
