import { useField } from "formik";
import React from "react";

const ContactInputField = ({ className, span, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={className}>
      <input
        className={` ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
        autoComplete="off"
        placeholder={span}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default ContactInputField;
