import { useField } from "formik";
import React from "react";

const ContactField = ({
  className,
  title,
  src,
  alt,
  description,
  content,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className={className}>
      {title ? <h2>{title}</h2> : ""}
      {content ? <h3>{content}</h3>: ""}
      {description ? <p>{description}</p> : ""}
      {src ? <img src={src} alt={alt} /> : ""}
    </div>
  );
};

export default ContactField;
