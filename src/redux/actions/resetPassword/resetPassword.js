import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export const resetPassword = (headers, payload) => {
  console.log(56756)
  httpRequest(requestMethod.POST, `v1/reset-password`, headers, payload, setResetPassword, setResetPasswordError);
  return {
    type: 'RESET_PASSWORD'
  }
}

export const setResetPassword = (data) => {
  store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
  return {
    type: 'SET_RESET_PASSWORD',
    data,
  }
};

export const setResetPasswordError = (errors) => {
  return {
    type: 'SET_RESET_PASSWORD_ERROR',
    data: errors,
  }
};