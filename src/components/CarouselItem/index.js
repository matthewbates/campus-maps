import { CarouselItemContainer, CarouselItemImg } from "./CarouselItemElements";

import { ArrowBack } from "../ArrowBack";
import { ArrowForward } from "../ArrowForward";

export const CarouselItems = ({
  images,
  name,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <CarouselItemContainer>
      <ArrowBack
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      {Array.isArray(images) && images.length > 0 ? (
        images.map((image, index) => (
          <CarouselItemImg
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
      <ArrowForward
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </CarouselItemContainer>
  );
};
