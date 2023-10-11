import "./App.css";

import { useState } from "react";

import { Dropdown } from "./components/Dropdown";
import { Map } from "./components/Map";
import { Toggle } from "./components/Toggle";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [displayMarkers, setDisplayMarkers] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisplay = () => {
    setDisplayMarkers(!displayMarkers);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Dropdown />
      <Toggle displayMarkers={displayMarkers} toggleDisplay={toggleDisplay} />
      <Map displayMarkers={displayMarkers} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
