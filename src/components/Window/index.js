import { InfoWindowF } from "@react-google-maps/api";

export const Window = ({ coordinates, map, name }) => {
  return (
    <InfoWindowF
      anchor={map}
      position={{ lat: coordinates.lat, lng: coordinates.lng }}
    >
      <div
        style={{
          fontWeight: "bold",
          padding: "0.5em",
          fontSize: "16px",
          fontFamily: "Roboto",
        }}
      >
        {name}
      </div>
    </InfoWindowF>
  );
};
