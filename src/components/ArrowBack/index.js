import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export const ArrowBack = ({ previousImg }) => {
  return (
    <ChevronLeftIcon
      sx={{
        color: "#ffffff",
        fontSize: "2em",
      }}
      onClick={previousImg}
    />
  );
};
