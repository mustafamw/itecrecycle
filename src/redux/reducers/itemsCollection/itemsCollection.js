const initState = {
  loading: false,
  loaded: false,
  data: undefined,
  errors: undefined,
}

const itemsCollection = (state = initState, action) => {
  const { type, data, errors } = action;
  switch (type) {
    case 'ITEMS_COLLECTION':
      return {
        ...state,
        loading: true,
      }
    case 'SET_ITEMS_COLLECTION':
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      }
    case 'SET_ITEMS_COLLECTION_RESET':
      return {
        ...state,
        loading: false,
        loaded: false,
        data: undefined,
        errors: undefined,
      }
    case 'SET_ITEMS_COLLECTION_ERROR':
      return {
        ...state,
        loading: false,
        loaded: true,
        errors
      }
    default:
      return state
  }
}

export default itemsCollection;