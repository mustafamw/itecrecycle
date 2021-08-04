import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { addAlert } from '../../../redux/actions/alert/alert';
import { store } from '../../../redux/store/store';

export const activate = (headers) => {
  httpRequest(requestMethod.POST, `v1/activate`, headers, {}, setActivate, setActivateError);
  return {
    type: 'ACTIVATE'
  }
}

export const setActivate = (data) => {
  store.dispatch(addAlert({ type: 'success', message: data.data.message }));
  return {
    type: 'SET_ACTIVATE',
    data: {
      valid: true,
    },
  }
};

export const setActivateError = (errors) => ({
  type: 'SET_ACTIVATE_ERROR',
  data: errors,
});