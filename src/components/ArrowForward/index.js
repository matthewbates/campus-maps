import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { ArrowContainer } from "./ArrowForwardElements";

import { nextImg } from "../../utils/helpers";

export const ArrowForward = ({ images, activeIndex, setActiveIndex }) => {
  return (
    <ArrowContainer
      onClick={() => nextImg(images, activeIndex, setActiveIndex)}
    >
      <ChevronRightIcon
        sx={{
          color: "#ffffff",
          fontSize: "2em",
        }}
      />
    </ArrowContainer>
  );
};
