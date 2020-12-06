import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';

export const getProducts = (pageNo) => {
  httpRequest(requestMethod.GET, `v1/products?pageNo=${pageNo}`, {}, {}, setProducts, setProductsError)
  return {
    type: 'GET_PRODUCTS'
  }
}

export const setProducts = (data) => ({
  type: 'SET_PRODUCTS',
  data
});

export const setProductsError = (errors) => ({
  type: 'SET_PRODUCTS_ERROR',
  data: errors
});

export const clearProducts = () => ({
  type: 'CLEAR_PRODUCTS',
});