export const containerStyle = {
  height: "100vh",
};

export const mapOptions = {
  zoom: 17,
  mapTypeControl: true,
  zoomControl: false,
  fullscreenControl: false,
  streetViewControl: true,
  mapTypeId: "satellite",
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
          color: "#a9a9a9",
        },
      ],
    },
  ],
};
