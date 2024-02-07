import { InfoWindowF } from "@react-google-maps/api";

import { WindowContainer, BuildingName } from "./WindowElements";
import { Button } from "../MUI/Button";

import { toggleSidebar } from "../../utils/helpers";
import { Popover } from "../MUI/Popover";
import { WebStories } from "@mui/icons-material";

export const Window = ({
  coordinates,
  name,
  images,
  address,
  information,
  website,
  isOpen,
  setIsOpen,
  id,
  setSelectedLocation,
}) => {
  return (
    <InfoWindowF position={{ lat: coordinates.lat, lng: coordinates.lng }}>
      <WindowContainer>
        <Popover
          name={name}
          images={images}
          address={address}
          information={information}
          website={website}
        />
      </WindowContainer>
    </InfoWindowF>
  );
};
