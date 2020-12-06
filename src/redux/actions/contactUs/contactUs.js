import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export const contactUs = (payload) => {
  httpRequest(requestMethod.POST, `v1/contact-us`, {}, payload, setContactUs, setContactUsError);
  return {
    type: 'CONTACT_US'
  }
}

export const setContactUs= (data) => {
  store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
  return {
    type: 'SET_CONTACT_US',
    data: data,
  }
};


export const setContactUsError = (errors) => {
  return {
    type: 'SET_CONTACT_US_ERROR',
    data: errors,
  }
};