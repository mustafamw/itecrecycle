import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export function resetPassword(headers, payload) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'RESET_PASSWORD',
          });
          const data = await httpRequest(requestMethod.POST, `v1/reset-password`, headers, payload)
          store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
          dispatch({
              type: 'SET_RESET_PASSWORD',
              data
          });
      } catch (errors) {
        dispatch({
          type: 'SET_RESET_PASSWORD_ERROR',
          errors
        });
      }
  };
}