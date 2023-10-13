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
