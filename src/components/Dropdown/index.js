import { useState } from "react";

import Select from "react-select";

import { options } from "../../utils/helpers";

export const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

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
