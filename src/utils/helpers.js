// handles the search functionality for <Dropdown />
export const handleLocationSearch = (locations) => {
  if (!Array.isArray(locations)) return null;

  const result = locations.filter((location, searchTerm) =>
    location.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return result.length > 0 ? result[0] : null;
};
