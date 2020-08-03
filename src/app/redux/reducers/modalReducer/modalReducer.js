import { createReducer } from "../../../common/utils/reducerUtils";
import { MODAL_OPEN, MODAL_CLOSE } from "../../../constants/modalConstants";
const initialState = {
  modalType: "",
  modalProps: ""
};

const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

const closeModal = state => {
  return { modalType: "", modalProps: "" };
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
