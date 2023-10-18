import { useState } from "react";

import Select from "react-select";

import { handleLocationSearch } from "../../utils/helpers";
import { options } from "../../utils/helpers";
import { locations } from "../../utils/locations";

export const Dropdown = ({
  displayMarkers,
  setDisplayMarkers,
  selectedLocation,
  setSelectedLocation,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (selectedLocation) => {
    locations.filter((location) => {
      if (location.name === selectedLocation.label) {
        console.log(selectedLocation);
      }
    });
  };

  return (
    <Select
      value={options.find((option) => option.label === searchTerm)}
      onChange={handleChange}
      options={options}
      placeholder="Search..."
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          width: "100%",
          height: "4em",
          cursor: "pointer",
        }),
      }}
    />
  );
};
