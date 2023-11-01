import { CarouselItemContainer, CarouselItemImg } from "./CarouselItemElements";

export const CarouselItems = ({ images, name, activeIndex }) => {
  return (
    <CarouselItemContainer>
      {Array.isArray(images) ? (
        images.map((image, index) => (
          <CarouselItemImg
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
    </CarouselItemContainer>
  );
};
