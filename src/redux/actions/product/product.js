import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';

export const getProduct = (id) => {
  httpRequest(requestMethod.GET, `v1/products/${id}`, {}, {}, setProduct, setProductError)
  return {
    type: 'GET_PRODUCT'
  }
}

export const setProduct = (json) => ({
  type: 'SET_PRODUCT',
  data: json.data
});

export const setProductError = (errors) => ({
  type: 'SET_PRODUCT_ERROR',
  data: errors
});

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