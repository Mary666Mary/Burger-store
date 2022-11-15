import React from "react";
import Select from "react-select";
import "./doneSelectStyle.scss";

function DonenessSelect({ ...props }) {
  const options = [
    { value: "well-done", label: "Well Done" },
    { value: "medium", label: "Medium" },
    { value: "medium-well", label: "Medium Well" },
  ];

  return (
    <Select
      classNamePrefix="doneness-select"
      defaultValue={options[0]}
      options={options}
      {...props}
    />
  );
}

export default DonenessSelect;
