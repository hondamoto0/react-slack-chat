import React from "react";
import { Label, Form } from "semantic-ui-react";

export const TextInput = ({
  input,
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
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextInput;
