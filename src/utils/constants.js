export const containerStyle = {
  height: "100vh",
};

export const mapOptions = {
  zoom: 16.5,
  mapTypeControl: false,
  zoomControl: false,
  fullscreenControl: false,
  streetViewControl: true,
  // allows a mobile user to use one finger to move around the map
  gestureHandling: "greedy",
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
