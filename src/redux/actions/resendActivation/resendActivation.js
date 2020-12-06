import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { setLoginReset } from '../login/login';
import { addAlert } from '../alert/alert';

export const resendActivation = (payload) => {
  httpRequest(requestMethod.POST, `v1/resend-activation`, {}, payload, setResendActivation, setResendActivationError);
  return {
    type: 'RESEND_ACTIVATION'
  }
}

export const setResendActivation = (data) => {
  store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
  store.dispatch(setLoginReset());
  return {
    type: 'SET_RESEND_ACTIVATION',
    data
  }
};


export const setResendActivationReset = () => {
  return {
    type: 'SET_RESEND_ACTIVATION_RESET',
  }
};


export const setResendActivationError = (errors) => {
  return {
    type: 'SET_RESEND_ACTIVATION_ERROR',
    data: errors,
  }
};