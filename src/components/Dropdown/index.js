import Select from "react-select";

import { DropdownContainer } from "./DropdownElements";

import { locations } from "../../utils/buildings";

export const Dropdown = () => {
  const options = locations
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((location) => {
      return { value: `${location.name}`, label: `${location.name}` };
    });
  return (
    <DropdownContainer>
      <Select options={options} />
    </DropdownContainer>
  );
};
