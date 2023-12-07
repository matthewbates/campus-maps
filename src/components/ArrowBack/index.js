import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { ArrowContainer } from "./ArrowBackElements";

import { previousImg } from "../../utils/helpers";

export const ArrowBack = ({ images, activeIndex, setActiveIndex }) => {
  return (
    <ArrowContainer
      onClick={() => previousImg(images, activeIndex, setActiveIndex)}
    >
      <ChevronLeftIcon
        sx={{
          color: "#ffffff",
          fontSize: "2em",
        }}
      />
    </ArrowContainer>
  );
};
