import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export function contactUs(payload) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'CONTACT_US',
          });
          const data = await httpRequest(requestMethod.POST, `v1/contact-us`, {}, payload)
          store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
          dispatch({
              type: 'SET_CONTACT_US',
              data
          });
      } catch (errors) {
        dispatch({
          type: 'SET_CONTACT_US_ERROR',
          errors
        });
      }
  };
}