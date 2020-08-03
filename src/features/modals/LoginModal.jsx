import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "../../app/redux/actions/modalActions";
import LoginForm from "../auth/Login/LoginForm";

const actions = { closeModal };

class LoginModal extends Component {
  handleClose = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <Modal size="mini" open={true} onClose={this.handleClose}>
        <Modal.Header>Login to Re-vents</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LoginForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  null,
  actions
)(LoginModal);
