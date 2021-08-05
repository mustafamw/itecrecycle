import { store } from '../redux/store/store';
import {
  logout
} from '../redux/actions/login/login'
import { config } from '../config/config';
import { addAlert } from '../redux/actions/alert/alert';
const axios = require('axios');
const httpStatus = require('http-status');
const { isEmpty } = require('lodash');


export const httpRequest = async (method, url, headers, body) => {
  try {
    const { api } = config.app;
    const data = await axios[method](`${api}/${url}`, {
      ...body
    }, { 
      headers: {
        ...headers
      }
    })
    return data.data;
  }
  catch(error) {
    try {
      const { data } = error && error.response;
      switch (data.code) {
        case httpStatus.UNAUTHORIZED:
          store.dispatch(addAlert({ type: 'danger', message: data.message }))
          break;
        case httpStatus.BAD_REQUEST:
          if(data.message === 'Validation Error') {
            const type = data.errors[0].types[0];
            switch(type) {
              case 'jwt.valid':
                store.dispatch(addAlert({ type: 'danger', message: 'Link is not valid' }))
                store.dispatch(logout())
                break;
              case 'jwt.expired':
                store.dispatch(addAlert({ type: 'danger', message: 'Link has expired' }))
                store.dispatch(logout())
                break;
              default:
                break;
            }
          }
          break;
        case httpStatus.INTERNAL_SERVER_ERROR:
          store.dispatch(addAlert({ type: 'danger', message: 'We\'re sorry, but we\'re having some technical difficulties. Please try again later' }))
          break;
        case httpStatus.FORBIDDEN:
          store.dispatch(addAlert({ type: 'info', message: data.message }))
          break;
        case httpStatus.CONFLICT:
          if (!isEmpty(data.errors)) {
            break;
          }
          store.dispatch(addAlert({ type: 'warning', message: data.message }))
          break;
        default:
          store.dispatch(addAlert({ type: 'danger', message: 'We\'re sorry, but we\'re having some technical difficulties. Please try again later' }))
          break;
      }
      throw data;
    } catch (error) {
      throw error;
    }
  };
}