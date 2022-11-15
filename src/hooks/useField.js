import React, { useState } from "react";

export const useField = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const [valueDirty, setValueDirty] = useState(false);
  const [valueError, setValueError] = useState("Поле не может быть пустым");

  return [
    value,
    setValue,
    valueDirty,
    setValueDirty,
    valueError,
    setValueError,
  ];
};
