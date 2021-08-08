import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { addAlert } from '../../../redux/actions/alert/alert';
import { store } from '../../../redux/store/store';

export function getProduct(id) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'GET_PRODUCT',
          });
          const data = await httpRequest(requestMethod.GET, `v1/products/${id}`)
          if(!data.data) {
            store.dispatch(addAlert({ type: 'danger', message: 'Link is not valid' }));
          }
          dispatch({
              type: 'SET_PRODUCT',
              data
          });
      } catch (errors) {
          dispatch({
            type: 'SET_PRODUCT_ERROR',
            errors
        });
      }
  };
}

export const setProductQuantity = (quantity) => ({
  type: 'SET_PRODUCT_QUANTITY',
  quantity,
});

export const incrementQuantity = () => ({
  type: 'INCREMENT_QUANTITY_PRODUCT'
});

export const decrementQuantity = () => ({
  type: 'DECREMENT_QUANTITY_PRODUCT'
});