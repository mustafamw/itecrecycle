import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { setLoginReset } from '../login/login';
import { addAlert } from '../alert/alert';

export function resendActivation(payload) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'RESEND_ACTIVATION',
          });
          const data = await httpRequest(requestMethod.POST, `v1/resend-activation`, {}, payload)
          store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
          store.dispatch(setLoginReset());
          dispatch({
              type: 'SET_RESEND_ACTIVATION',
              data
          });
      } catch (errors) {
        dispatch({
          type: 'SET_RESEND_ACTIVATION_ERROR',
          errors
        });
      }
  };
}

export const setResendActivationReset = () => ({
  type: 'SET_RESEND_ACTIVATION_RESET',
});