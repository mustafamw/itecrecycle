import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export const signup = (payload) => {
  httpRequest(requestMethod.POST, `v1/signup`, {}, payload, setSignup, setSignupError);
  return {
    type: 'SIGNUP'
  }
}

export const setSignup = (data) => {
  store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
  return {
    type: 'SET_SIGNUP'
  }
};

export const setSignupReset = () => ({
  type: 'SET_SIGNUP_RESET',
});

export const setSignupError = (errors) => ({
  type: 'SET_SIGNUP_ERROR',
  data: errors,
});