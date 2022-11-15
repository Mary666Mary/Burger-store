import React from "react";
import Select from "react-select";
import "./customSelect.scss";


const CustomSelect = ({value, setValue, options, label, htmlFor}) => {
    const handler = (values) => {
        setValue(values.value);
    }

    return (
        <div className="form-field form-field--type">
            <label htmlFor={htmlFor}>{label}</label>
            <Select
                value={options.value}
                setValue={setValue}
                classNamePrefix="custom-select"
                defaultValue={options[0]}
                options={options}
                onChange={handler}
            />
        </div>
    );
};

export default CustomSelect;
