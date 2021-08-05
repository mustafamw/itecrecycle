import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { addAlert } from '../../../redux/actions/alert/alert';
import { store } from '../../../redux/store/store';

export function activate(headers) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'ACTIVATE',
          });
          const data = await httpRequest(requestMethod.POST, `v1/activate`, headers)
          store.dispatch(addAlert({ type: 'success', message: data.data.message }));
          dispatch({
              type: 'SET_ACTIVATE',
              data: {
                valid: true,
              },
          });
      } catch (errors) {
          dispatch({
            type: 'SET_ACTIVATE_ERROR',
            errors
        });
      }
  };
}