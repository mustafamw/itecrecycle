import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export function signup(payload) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'SIGNUP',
          });
          const data = await httpRequest(requestMethod.POST, `v1/signup`, {}, payload)
          store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
          dispatch({
              type: 'SET_SIGNUP'
          });
      } catch (errors) {
        dispatch({
          type: 'SET_SIGNUP_ERROR',
          errors
        });
      }
  };
}

export const setSignupReset = () => ({
  type: 'SET_SIGNUP_RESET',
});