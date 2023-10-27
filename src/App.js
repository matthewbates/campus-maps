import "./App.css";

import { useState } from "react";

import { Dropdown } from "./components/Dropdown";
import { Map } from "./components/Map";
import { Toggle } from "./components/Toggle";
import { locations } from "./utils/locations";
import { Navbar } from "./components/Navbar";

const App = () => {
  const [displayMarker, setDisplayMarker] = useState(false);
  const [displayAllMarkers, setDisplayAllMarkers] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(false);

  const toggleDisplay = () => {
    setDisplayAllMarkers(!displayAllMarkers);
    setSelectedLocation(!selectedLocation);
  };

  const handleMarkerSelection = (id) => {
    const selectedMarker = locations.find((location) => location.id === id);
    setDisplayMarker(selectedMarker);
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
      {/* <Dropdown
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        handleMarkerSelection={handleMarkerSelection}
      />
      <Toggle
        displayMarker={displayMarker}
        displayAllMarkers={displayAllMarkers}
        toggleDisplay={toggleDisplay}
      /> */}
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
