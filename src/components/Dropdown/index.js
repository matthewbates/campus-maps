import Select from "react-select";

import { options } from "../../utils/helpers";
import { locations } from "../../utils/locations";

export const Dropdown = ({ handleMarkerSelection }) => {
  const handleChange = (selectedLocation) => {
    const selected = locations.find(
      (location) => location.name === selectedLocation.value
    );
    if (selected) {
      handleMarkerSelection(selected.id);
    }
  };

  return (
    <Select
      onChange={handleChange}
      options={options}
      placeholder="Search..."
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          width: "100%",
          height: "3em",
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          fontFamily: "Roboto",
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          fontFamily: "Roboto",
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          fontFamily: "Arial",
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          fontFamily: "Roboto",
        }),
      }}
    />
  );
};
