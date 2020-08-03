import React from "react";
import { Label, Form } from "semantic-ui-react";

export const TextArea = ({
  input,
  rows,
  width,
  type,
  placeholder,
  meta: { touched, error },
  label
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <label color="teal" style={{ textTransform: "capitalize" }}>
        Title :{" "}
      </label>
      <textarea {...input} placeholder={placeholder} type={type} rows={rows} />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextArea;
