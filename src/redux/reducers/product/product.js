const initState = {
  product: undefined,
  loading: false,
  loaded: false,
  errors: undefined,
}

const product = (state = initState, action) => {
  const { type, data, quantity} = action;
  switch (type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case 'SET_PRODUCT':
      data.quantity = 1;
      return {
        ...state,
        errors: undefined,
        product: data,
        loading: false,
        loaded: true,
      }
    case 'SET_PRODUCT_ERROR':
      return {
        ...state,
        errors: data,
        loading: false,
        loaded: false,
      }
    case 'SET_PRODUCT_QUANTITY':
      state.product.quantity = quantity;
      return {
        ...state,
      }
    case 'INCREMENT_QUANTITY_PRODUCT':
      state.product.quantity += 1;
      return {
        ...state,
      }
    case 'DECREMENT_QUANTITY_PRODUCT':
      state.product.quantity -= 1;
      return {
        ...state,
      }
    default:
      return state
  }
}

export default product;