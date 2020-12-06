import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import {
  setCookies,
  removeCookies,
} from '../../../utils/cookies';
import jwt_decode from "jwt-decode";
import $ from 'jquery';

export const login = (payload) => {
  httpRequest(requestMethod.POST, `v1/login`, {}, payload, setLogin, setLoginError);
  return {
    type: 'LOGIN'
  }
}

export const setLogin = (data) => {
  setCookies('jwt', data.token);
  $(`#loginModal`).modal('hide');
  $('body').removeClass('modal-open');
  return {
    type: 'SET_LOGIN',
    data: jwt_decode(data.token),
  }
};


export const setLoginReset = () => {
  return {
    type: 'SET_LOGIN_RESET',
  }
};

export const setLoginError = (errors) => {
  removeCookies('jwt');
  return {
    type: 'SET_LOGIN_ERROR',
    data: errors,
  }
};

export const logout = () => {
  removeCookies('jwt');
  return {
    type: 'LOGOUT',
    payload: undefined,
  };
}