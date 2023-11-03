export const containerStyle = {
  height: "100vh",
};

export const mapOptions = {
  zoom: 15.5,
  mapTypeControl: false,
  zoomControl: false,
  fullscreenControl: false,
  streetViewControl: true,
  // mapTypeId: "satellite",
  // rotateControl: true,
  styles: [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          // color: "#ef3340",
          color: "#ffffff",
        },
        {
          weight: 5.5,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
        {
          // color: "#ef3340",
          color: "#a9a9a9",
        },
      ],
    },
  ],
};
