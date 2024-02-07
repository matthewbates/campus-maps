import "./App.css";

import { useState } from "react";

import { Map } from "./components/Map";
import { locations } from "./utils/locations";
import { Navbar } from "./components/Navbar";

const App = () => {
  const [displayMarker, setDisplayMarker] = useState(false);
  const [displayAllMarkers, setDisplayAllMarkers] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(false);

  const toggleDisplay = () => {
    setDisplayAllMarkers(!displayAllMarkers);
    setSelectedLocation(!selectedLocation);
  };

  // const handleMarkerSelection = (id) => {
  //   const selectedMarker = locations.find((location) => location.id === id);
  //   setDisplayMarker(selectedMarker);
  // };

  const handleMarkerSelection = (id) => {
    return locations.find((location) => location.id === id);
  };

  return (
    <div className="App">
      <Navbar
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        handleMarkerSelection={handleMarkerSelection}
        displayMarker={displayMarker}
        displayAllMarkers={displayAllMarkers}
        setDisplayAllMarkers={setDisplayAllMarkers}
        toggleDisplay={toggleDisplay}
      />
      <Map
        displayMarker={displayMarker}
        setDisplayMarker={setDisplayMarker}
        displayAllMarkers={displayAllMarkers}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </div>
  );
};

export default App;
