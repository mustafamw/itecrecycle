import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';


export function getProducts(pageNo) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'GET_PRODUCTS',
          });
          const data = await httpRequest(requestMethod.GET, `v1/products?pageNo=${pageNo}`);
          dispatch({
              type: 'SET_PRODUCTS',
              data
          });
      } catch (errors) {
          dispatch({
            type: 'SET_PRODUCTS_ERROR',
            errors
        });
      }
  };
}

export const clearProducts = () => ({
  type: 'CLEAR_PRODUCTS',
});