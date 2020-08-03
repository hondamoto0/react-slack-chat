import React from "react";
import { connect } from "react-redux";
import TestModal from "./TestModals";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal
};

const ModalManager = ({ currentModal }) => {
  let renderModal;
  if (currentModal.modalType) {
    console.log(currentModal);
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderModal = <ModalComponent {...modalProps} />;
  }
  return (
    <div>
      <span>{renderModal}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  currentModal: state.modals
});

export default connect(
  mapStateToProps,
  null
)(ModalManager);
