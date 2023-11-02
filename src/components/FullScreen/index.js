import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

export const FullScreen = ({ toggle }) => {
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "1em",
            padding: "0.5em",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Tooltip title="Full screen">
        <FullscreenIcon
          onClick={toggle}
          sx={{
            cursor: "pointer",
            color: "#ffffff",
            fontSize: "2em",
          }}
        />
      </Tooltip>
    </ThemeProvider>
  );
};
