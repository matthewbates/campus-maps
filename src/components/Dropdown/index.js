import { useState, useEffect } from "react";

import Select from "react-select";

import { DropdownContainer } from "./DropdownElements";

import { options } from "../../utils/helpers";
import { locations } from "../../utils/locations";

export const Dropdown = ({ handleMarkerSelection }) => {
  const [selectWidth, setSelectWidth] = useState(
    window.innerWidth < 600 ? "90vw" : "50vw"
  );

  const handleChange = (selectedLocation) => {
    const selected = locations.find(
      (location) => location.name === selectedLocation.value
    );
    if (selected) {
      handleMarkerSelection(selected.id);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSelectWidth(window.innerWidth < 600 ? "90vw" : "50vw");
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DropdownContainer>
      <Select
        onChange={handleChange}
        options={options}
        placeholder="Search..."
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            width: selectWidth,
            height: "2.5em",
            justifyContent: "center",
            alignItems: "center",
          }),
        }}
      />
    </DropdownContainer>
  );
};
