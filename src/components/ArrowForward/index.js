import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const ArrowForward = ({ nextImg }) => {
  return (
    <ChevronRightIcon
      sx={{
        color: "#ffffff",
        fontSize: "2em",
      }}
      onClick={nextImg}
    />
  );
};
