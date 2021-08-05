const initState = {
  baskets: [],
  confirmation: {},
  loading: false,
  loaded: false,
  errors: undefined,
}

const baskets = (state = initState, action) => {
  const { type, product, productId, index, data, errors } = action;
  switch (type) {
    case 'ADD_BASKET':
      return {
        ...state,
        baskets: state.baskets.concat(JSON.parse(JSON.stringify(product)))
      }
    case 'BOOK_BASKET':
      return  {
        ...state,
        loading: true,
        loaded: false,
      }
    case 'SET_BOOK_BASKET':
      return  {
        ...state,
        loading: false,
        loaded: true,
        confirmation: {
          ...data.data
        },
        errors: undefined,
      }
    case 'SET_BOOK_BASKET_ERROR':
      return  {
        ...state,
        loading: false,
        loaded: false,
        errors,
      }
    case 'REMOVE_BASKET_PRODUCT_ID':
      return {
        ...state,
        baskets: state.baskets.filter((e) => e.productId !== productId),
      }
    case 'REMOVE_BASKET_INDEX':
      return {
        ...state,
        baskets: state.baskets.filter((e, i) => i !== index),
      }
    case 'INCREMENT_BASKET_BY_PRODUCT_ID':
      const basketIncrement = state.baskets.find(e => e.productId === productId);
      if(basketIncrement) {
        basketIncrement.quantity += 1;
      }
      return {
        ...state,
      }
    case 'DECREMENT_BASKET_BY_PRODUCT_ID':
      const basketDecrement = state.baskets.find(e => e.productId === productId);
      if(basketDecrement) {
        basketDecrement.quantity -= 1;
      }
      return {
        ...state,
      }
    case 'INCREMENT_BASKET_BY_INDEX':
      state.baskets[index].quantity += 1;
      return {
        ...state,
      }
    case 'DECREMENT_BASKET_BY_INDEX':
      state.baskets[index].quantity -= 1;
      return {
        ...state,
      }
    case 'CLEAR_BASKET':
      state.baskets = [];
      return {
        ...state,
      }
    case 'RESET_BOOK_BASKET':
      return  {
        ...state,
        loading: false,
        loaded: false,
      }
    default:
      return state
  }
}

export default baskets;