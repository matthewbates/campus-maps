export const containerStyle = {
  width: "100vw",
  height: "100vh",
};

export const mapOptions = {
  zoom: 16,
  mapTypeControl: true,
  // mapTypeControlOptions: {
  //   position: window.google.maps.ControlPosition.TOP_CENTER,
  // },
  // fullscreenControl: true,
  // fullscreenControlOptions: {
  //   position: window.google.maps.ControlPosition.TOP_LEFT,
  // },
  // scrollWheel: true,
  // rotateControl: true,
  // draggable: true,
  // streetViewControl: true,
  // streetViewControlOptions: {
  //   position: window.google.maps.ControlPosition.LEFT_TOP,
  // },
  // zoomControl: true,
  // zoomControlOptions: {
  //   position: window.google.maps.ControlPosition.LEFT_TOP,
  // },

  styles: [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
        {
          lightness: 30,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
        },
        {
          weight: 3.5,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f1f2f2",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
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
          color: "#721C28",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#a7a7a7",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#efefef",
        },
        {
          lightness: 50,
        },
      ],
    },
    {
      featureType: "road.highway",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.school",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#721C28",
        },
      ],
    },
    {
      featureType: "poi.school",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#000",
        },
      ],
    },
    {
      featureType: "poi.sports_complex",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#721C28",
        },
      ],
    },
    {
      featureType: "water",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
};
