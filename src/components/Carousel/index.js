import { useState, useEffect } from "react";

import { CarouselContainer } from "./CarouselElements";

import { CarouselItems } from "../CarouselItem";

export const Carousel = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  //   }, 7500);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  const previousImg = () => {
    setActiveIndex(activeIndex < 1 ? images.length - 1 : activeIndex - 1);
  };

  const nextImg = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <CarouselContainer>
      <CarouselItems
        images={images}
        name={name}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </CarouselContainer>
  );
};
