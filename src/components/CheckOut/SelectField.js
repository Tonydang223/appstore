import { FormGroup } from "@material-ui/core";
import React from "react";
import Select from "react-select";
import { Options } from "../../../constants/globals";
const SelectField = (props) => {
  const { field, options, label, placeholder } = props;
  const { name } = field;

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      <Select
        id={name}
        {...field}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        options={Options}
      />
    </FormGroup>
  );
};

export default SelectField;
