import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';

export function getProduct(id) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'GET_PRODUCT',
          });
          const data = await httpRequest(requestMethod.GET, `v1/products/${id}`)
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