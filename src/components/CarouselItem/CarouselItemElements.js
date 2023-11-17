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
  /* height: 250px; */
  height: ${({ $fullScreen }) => ($fullScreen ? "100vh" : "250px")};
  display: ${({ $index, $activeIndex }) =>
    $index === $activeIndex ? "block" : "none"};

  @media screen and (min-width: 600px) {
    height: 300px;
    height: ${({ $fullScreen }) => ($fullScreen ? "100vh" : "250px")};
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0.5em;

  cursor: pointer;
  transition: 0.3s ease;

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
