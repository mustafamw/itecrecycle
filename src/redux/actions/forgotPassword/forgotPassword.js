import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export const forgotPassword = (payload) => {
  httpRequest(requestMethod.POST, `v1/forgot-password`, {}, payload, setForgotPassword, setForgotPasswordError);
  return {
    type: 'FORGOT_PASSWORD'
  }
}

export const setForgotPassword = (data) => {
  store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
  return {
    type: 'SET_FORGOT_PASSWORD',
    data
  }
};

export const setForgotPasswordError = (errors) => ({
  type: 'SET_FORGOT_PASSWORD_ERROR',
  data: errors,
});