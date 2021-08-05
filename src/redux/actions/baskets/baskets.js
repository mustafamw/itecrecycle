import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export const addBasket = (product) => ({
  type: 'ADD_BASKET',
  product
});

export const removeBasketProductId = (productId) => ({
  type: 'REMOVE_BASKET_PRODUCT_ID',
  productId
});

export const removeBasketIndex = (index) => ({
  type: 'REMOVE_BASKET_INDEX',
  index
});

export const incrementBasketByProductId = (productId) => ({
  type: 'INCREMENT_BASKET_BY_PRODUCT_ID',
  productId
});

export const decrementBasketByProductId = (productId) => ({
  type: 'DECREMENT_BASKET_BY_PRODUCT_ID',
  productId
});

export const incrementBasketByIndex = (index) => ({
  type: 'INCREMENT_BASKET_BY_INDEX',
  index
});

export const decrementBasketByIndex = (index) => ({
  type: 'DECREMENT_BASKET_BY_INDEX',
  index
});

export const clearBasket = () => ({
  type: 'CLEAR_BASKET',
});


export function bookBasket(headers, payload) {
  return async (dispatch) => {
      try {
          dispatch({
              type: 'BOOK_BASKET',
          });
          const data = await httpRequest(requestMethod.POST, `v1/basket/book`, headers, payload)
          store.dispatch(clearBasket());
          dispatch({
              type: 'SET_BOOK_BASKET',
              data
          });
      } catch (errors) {
        if(errors && errors.code === 403) {
          store.dispatch(clearBasket());
        }
        dispatch({
          type: 'SET_BOOK_BASKET_ERROR',
          errors
        });
      }
  };
}

export const resetBookBasket = () => ({
  type: 'RESET_BOOK_BASKET'
});