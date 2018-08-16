const maplayout = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444"
      },
      {
        lightness: "-50"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "labels.text.fill",
    stylers: [
      {
        lightness: "-80"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "labels.text.stroke",
    stylers: [
      {
        lightness: "0"
      }
    ]
  },
  {
    featureType: "landscape.natural",
    elementType: "labels.text.fill",
    stylers: [
      {
        lightness: "-71"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        saturation: "-100"
      },
      {
        lightness: "-30"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on"
      },
      {
        hue: "#00a2ff"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        lightness: "-50"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#ebb5c9"
      },
      {
        visibility: "on"
      }
    ]
  }
]

export default maplayout;
