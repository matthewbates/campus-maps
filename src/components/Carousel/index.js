import { useState, useEffect } from "react";

import { CarouselContainer } from "./CarouselElements";
import { CarouselItems } from "../CarouselItem";

export const Carousel = ({ fullScreen, images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const previousImg = () => {
    setActiveIndex(activeIndex < 1 ? images.length - 1 : activeIndex - 1);
  };

  const nextImg = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <CarouselContainer>
      <CarouselItems
        fullScreen={fullScreen}
        images={images}
        name={name}
        activeIndex={activeIndex}
        previousImg={previousImg}
        nextImg={nextImg}
      />
    </CarouselContainer>
  );
};
