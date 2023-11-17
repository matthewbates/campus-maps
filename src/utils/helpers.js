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

// handles click events outside of <Sidebar /> when the viewports > 768px
export const handleClickOutside = (ref, callback) => {
  const useClickOutside = (e) => {
    if (!ref.current || !ref.parentNode.contains(e.target)) {
      callback();
    }
    useEffect(() => {
      window.addEventListener("click", useClickOutside);
      return () => {
        window.removeEventListener("click", useClickOutside);
      };
    }, [ref, callback]);
  };
};
