import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  color: white;
  padding: 16px;
  cursor: pointer;
  transition: 0.3s ease;

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const CarouselContent = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 300px;

  @media screen and (min-width: 600px) {
    max-height: 200px;
  }
`;
