import { useState } from "react";
import Select from "react-select";

import CAMPUS_MAP from "../../assets/pdfs/campus_map.pdf";
import PARKING_MAP from "../../assets/pdfs/parking_map.pdf";

const TARGET = "_blank";

export const MapSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: CAMPUS_MAP, label: "Campus Map" },
    { value: PARKING_MAP, label: "Parking Map" },
  ];

  const handleDownload = (mapUrl) => {
    const link = document.createElement("a");
    link.href = mapUrl;
    link.download = "map.pdf";
    link.target = TARGET;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption) {
      handleDownload(selectedOption.value);
    }
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder="Select Map"
    />
  );
};
