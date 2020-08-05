import React from "react";
import { Form, Segment, Button, Label } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { combineValidators, isRequired } from "revalidate";
import { connect } from "react-redux";
import { registerUser } from "../../../app/redux/actions/authActions";

const validate = combineValidators({
  displayName: isRequired("displayName"),
  email: isRequired("email"),
  password: isRequired("password")
});

const RegisterForm = ({
  handleSubmit,
  registerUser,
  error,
  invalid,
  submitting
}) => {
  return (
    <div>
      <Form
        size="large"
        onSubmit={handleSubmit(registerUser)}
        autoComplete="off"
      >
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          <Button
            disabled={invalid || submitting}
            fluid
            size="large"
            color="teal"
          >
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

const actions = { registerUser };

export default connect(
  null,
  actions
)(reduxForm({ form: "registerForm", validate })(RegisterForm));
