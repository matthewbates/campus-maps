import "./App.css";

import { useState } from "react";

import { Dropdown } from "./components/Dropdown";
import { Map } from "./components/Map";
import { Toggle } from "./components/Toggle";
import { Sidebar } from "./components/Sidebar";
import { Marker } from "./components/Marker";

function App() {
  const [displayMarkers, setDisplayMarkers] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  const toggleDisplay = () => {
    setDisplayMarkers(!displayMarkers);
  };

  return (
    <div className="App">
      <Dropdown
        displayMarkers={displayMarkers}
        setDisplayMarkers={setDisplayMarkers}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <Toggle displayMarkers={displayMarkers} toggleDisplay={toggleDisplay} />
      <Map
        displayMarkers={displayMarkers}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </div>
  );
}

export default App;
