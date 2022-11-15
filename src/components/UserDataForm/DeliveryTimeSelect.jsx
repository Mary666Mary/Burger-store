import React from "react";
import Select from "react-select";
import "./deliveryTimeSelect.scss";

const DeliveryTimeSelect = ({timeOption, setTimeOption, timeChangeHandler}) => {
  const options = [
    { value: "morning", label: "10:00" },
    { value: "brunch", label: "12:00" },
    { value: "lunch", label: "14:00" },
    { value: "after-lunch", label: "16:00" },
    { value: "dinner", label: "18:00" },
    { value: "after-dinner", label: "20:00" },
    { value: "late-night", label: "22:00" },
  ];

  return (
    <Select
      classNamePrefix="time-select"
      defaultValue={options[0]}
      options={options}
      onChange={timeChangeHandler}
      timeOption={timeOption}
      setTimeOption={setTimeOption}
    />
  );
};

export default DeliveryTimeSelect;
