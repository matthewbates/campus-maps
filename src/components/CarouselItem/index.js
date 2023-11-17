import {
  CarouselItemContainer,
  CarouselItemImg,
  ArrowContainer,
} from "./CarouselItemElements";

import { ArrowBack } from "../ArrowBack";
import { ArrowForward } from "../ArrowForward";

export const CarouselItems = ({
  images,
  name,
  activeIndex,
  previousImg,
  nextImg,
  fullScreen,
}) => {
  return (
    <CarouselItemContainer>
      <ArrowContainer onClick={previousImg}>
        <ArrowBack previousImg={previousImg} />
      </ArrowContainer>
      {Array.isArray(images) && images.length > 0 ? (
        images.map((image, index) => (
          <CarouselItemImg
            $fullScreen={fullScreen}
            $activeIndex={activeIndex}
            $index={index}
            key={index}
            src={image}
            alt={name}
          />
        ))
      ) : typeof images === "string" ? (
        <CarouselItemImg src={images} />
      ) : (
        <div style={{ color: "#ffffff" }}>No images to display.</div>
      )}
      <ArrowContainer onClick={nextImg}>
        <ArrowForward nextImg={nextImg} />
      </ArrowContainer>
    </CarouselItemContainer>
  );
};
