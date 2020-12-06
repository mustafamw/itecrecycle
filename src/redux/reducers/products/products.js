const initState = {
  products: [],
  pagination: {},
  loading: false,
  loaded: false,
  errors: undefined
}

const products = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        loading: true
      }
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: state.products.concat(JSON.parse(JSON.stringify(data.data))),
        pagination: data.metaData.pagination,
        loading: false,
        loaded: true,
      }
    case 'SET_PRODUCTS_ERROR':
      return {
        ...state,
        errors: data,
        loading: false,
        loaded: true,
      }
    case 'CLEAR_PRODUCTS':
      return {
        ...state,
        products: [],
        pagination: {},
        loading: false,
        loaded: false,
        errors: undefined
      }
    default:
      return state
  }
}

export default products