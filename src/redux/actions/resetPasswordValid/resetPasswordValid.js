import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';

export function resetPasswordValid(headers) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'RESET_PASSWORD_VALID',
          });
          await httpRequest(requestMethod.POST, `v1/reset-password/valid`, headers)
          dispatch({
              type: 'SET_RESET_PASSWORD_VALID',
              data: {
                valid: true,
              }
          });
      } catch (errors) {
        dispatch({
          type: 'SET_RESET_PASSWORD_VALID_ERROR',
          errors
        });
      }
  };
}