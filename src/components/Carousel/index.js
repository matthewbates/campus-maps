import { useState, useEffect } from "react";

import { CarouselContainer } from "./CarouselElements";

import { CarouselItems } from "../CarouselItem";

export const Carousel = ({ fullScreen, images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  //   }, 7500);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  return (
    <CarouselContainer>
      <CarouselItems
        fullScreen={fullScreen}
        images={images}
        name={name}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </CarouselContainer>
  );
};
