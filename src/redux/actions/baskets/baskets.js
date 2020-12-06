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

export const bookBasket = (headers, payload) => {
  httpRequest(requestMethod.POST, `v1/basket/book`, headers, payload, setBookBasket, setBookBasketError);
  return {
    type: 'BOOK_BASKET'
  }
}

export const setBookBasket = (data) => {
  store.dispatch(clearBasket());
  return {
    type: 'SET_BOOK_BASKET',
    data
  }
};

export const setBookBasketError = (errors) => {
  if(errors && errors.code === 403) {
    store.dispatch(clearBasket());
  }
  return {
    type: 'SET_BOOK_BASKET_ERROR',
    data: errors,
  }
};

export const resetBookBasket = () => {
  return {
    type: 'RESET_BOOK_BASKET'
  }
}