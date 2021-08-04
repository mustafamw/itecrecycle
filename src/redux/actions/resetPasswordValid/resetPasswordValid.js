import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';

export const resetPasswordValid = (headers) => {
  httpRequest(requestMethod.POST, `v1/reset-password/valid`, headers, {}, setResetPasswordValid, setResetPasswordError);
  return {
    type: 'RESET_PASSWORD_VALID'
  }
}

export const setResetPasswordValid = (data) => ({
  type: 'SET_RESET_PASSWORD_VALID',
  data: {
    valid: true,
  }
});

export const setResetPasswordError = (errors) => ({
  type: 'SET_RESET_PASSWORD_VALID_ERROR',
  data: errors
});