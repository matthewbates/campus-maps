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
      {images.length > 1 ? (
        <ArrowContainer onClick={previousImg}>
          <ArrowBack previousImg={previousImg} />
        </ArrowContainer>
      ) : null}
      {Array.isArray(images) ? (
        images.map((image, index) => (
          <CarouselItemImg
            fullScreen={fullScreen}
            activeIndex={activeIndex}
            index={index}
            key={index}
            src={image}
            alt={name}
          />
        ))
      ) : (
        <CarouselItemImg src={images} alt={name} />
      )}
      <ArrowContainer onClick={nextImg}>
        <ArrowForward nextImg={nextImg} />
      </ArrowContainer>
    </CarouselItemContainer>
  );
};
