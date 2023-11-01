import { useState, useEffect } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { CarouselContainer, ArrowContainer } from "./CarouselElements";
import { CarouselItems } from "../CarouselItems";

export const Carousel = ({ images, name }) => {
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
      <ArrowContainer>
        <ArrowBackIosIcon
          sx={{
            color: "#ffffff",
            fontSize: "2em",
          }}
          onClick={previousImg}
        />
      </ArrowContainer>
      <CarouselItems images={images} name={name} activeIndex={activeIndex} />
      <ArrowContainer>
        <ArrowForwardIosIcon
          sx={{
            color: "#ffffff",
            fontSize: "2em",
          }}
          onClick={nextImg}
        />
      </ArrowContainer>
    </CarouselContainer>
  );
};
