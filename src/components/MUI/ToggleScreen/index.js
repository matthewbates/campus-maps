import { Tooltip } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

import { toggleFullScreen } from "../../../utils/helpers";

export const ToggleScreen = ({ fullScreen, setFullScreen }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {fullScreen ? (
        <Tooltip title="Collapse">
          <FullscreenExitIcon
            onClick={() => toggleFullScreen(fullScreen, setFullScreen)}
            fontSize="large"
            sx={{ cursor: "pointer" }}
          />
        </Tooltip>
      ) : (
        <Tooltip title="Expand" fontSize="2em">
          <FullscreenIcon
            onClick={() => toggleFullScreen(fullScreen, setFullScreen)}
            fontSize="large"
            sx={{ cursor: "pointer" }}
          />
        </Tooltip>
      )}
    </div>
  );
};
