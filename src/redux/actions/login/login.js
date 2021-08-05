import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import {
  setCookies,
  removeCookies,
} from '../../../utils/cookies';
import jwt_decode from "jwt-decode";
import $ from 'jquery';

export function login(payload) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'LOGIN',
          });
          const data = await httpRequest(requestMethod.POST, `v1/login`, {}, payload)
          setCookies('jwt', data.token);
          $(`#loginModal`).modal('hide');
          $('body').removeClass('modal-open');
          dispatch({
              type: 'SET_LOGIN',
              data: jwt_decode(data.token)
          });
      } catch (errors) {
        removeCookies('jwt');
        dispatch({
          type: 'SET_LOGIN_ERROR',
          errors
        });
      }
  };
}

export const setLoginReset = () => ({
  type: 'SET_LOGIN_RESET',
});

export const logout = () => {
  removeCookies('jwt');
  return {
    type: 'LOGOUT',
    payload: undefined,
  };
}