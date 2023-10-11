import { useState } from "react";

import Select from "react-select";

import { locations } from "../../utils/buildings";

export const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = locations
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((location) => {
      return { label: `${location.name}`, value: `${location.name}` };
    });

  const handleChange = () => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select
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
