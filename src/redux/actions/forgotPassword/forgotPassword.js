import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export function forgotPassword(payload) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'FORGOT_PASSWORD',
          });
          const data = await httpRequest(requestMethod.POST, `v1/forgot-password`, {}, payload)
          store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
          dispatch({
              type: 'SET_FORGOT_PASSWORD',
              data
          });
      } catch (errors) {
        dispatch({
          type: 'SET_FORGOT_PASSWORD_ERROR',
          errors
        });
      }
  };
}