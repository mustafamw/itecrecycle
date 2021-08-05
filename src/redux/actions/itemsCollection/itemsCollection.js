import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export function itemsCollection(headers, payload) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'FORGOT_PASSWORD',
          });
          const data = await httpRequest(requestMethod.POST, `v1/items-collection`, headers, payload)
          store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
          dispatch({
              type: 'SET_ITEMS_COLLECTION'
          });
      } catch (errors) {
        dispatch({
          type: 'SET_ITEMS_COLLECTION_ERROR',
          errors
        });
      }
  };
}

export const setItemsCollectionReset = () => ({
  type: 'SET_ITEMS_COLLECTION_RESET',
});
