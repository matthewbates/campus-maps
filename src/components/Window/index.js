import { InfoWindowF } from "@react-google-maps/api";

export const Window = ({ coordinates, name }) => {
  return (
    <InfoWindowF
      position={{ lat: coordinates.lat + 0.0003, lng: coordinates.lng }}
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
