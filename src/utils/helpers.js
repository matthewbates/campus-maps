import { ImagesearchRoller } from "@mui/icons-material";
import { useEffect } from "react";

import { locations } from "./locations";

// handles the search functionality for <Dropdown />
export const handleLocationSearch = (locations) => {
  if (!Array.isArray(locations)) return null;

  const result = locations.filter((location, searchTerm) =>
    location.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return result.length > 0 ? result[0] : null;
};

// alphabetizes and maps through the array of location objects
export const options = locations
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((location) => {
    return { label: `${location.name}`, value: `${location.name}` };
  });

// toggles <Sidebar />
export const toggleSidebar = (isOpen, setIsOpen) => {
  setIsOpen(!isOpen);
};

export const filteredLocations = (
  displayAllMarkers,
  locations,
  selectedLocation
) => {
  return displayAllMarkers
    ? locations
    : locations.filter((location) => location.id === selectedLocation);
};

// toggles <ArrowBack />
export const previousImg = (images, activeIndex, setActiveIndex) => {
  setActiveIndex(activeIndex < 1 ? images.length - 1 : activeIndex - 1);
};

// toggles <ArrowForward />
export const nextImg = (images, activeIndex, setActiveIndex) => {
  setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
};
