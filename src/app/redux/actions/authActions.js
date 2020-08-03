import { LOGIN_USER, SIGN_OUT_USER } from "../../constants/authConstants";
import { closeModal } from "./modalActions";
export const login = creds => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: {
      creds
    }
  });
  dispatch(closeModal());
};

export const logout = () => {
  return {
    type: SIGN_OUT_USER
  };
};
