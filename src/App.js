import "./App.css";

import { useState } from "react";

import { Dropdown } from "./components/Dropdown";
import { Map } from "./components/Map";
import { Toggle } from "./components/Toggle";
import { locations } from "./utils/locations";

const App = () => {
  const [displayMarker, setDisplayMarker] = useState(false);
  const [displayAllMarkers, setDisplayAllMarkers] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(false);

  const toggleDisplay = () => {
    setDisplayAllMarkers(!displayAllMarkers);
    setSelectedLocation(false);
  };

  const handleMarkerSelection = (id) => {
    const selectedMarker = locations.find((location) => location.id === id);
    setDisplayMarker(selectedMarker);
  };

  return (
    <div className="App">
      <Dropdown
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        handleMarkerSelection={handleMarkerSelection}
      />
      <Toggle
        displayAllMarkers={displayAllMarkers}
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
