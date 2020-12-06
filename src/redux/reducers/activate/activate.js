const initState = {
  loading: false,
  loaded: false,
  data: undefined,
  errors: undefined,
}

const activate = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'ACTIVATE':
      return {
        ...state,
        loading: true,
      }
    case 'SET_ACTIVATE':
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      }
    case 'SET_ACTIVATE_ERROR':
      return {
        ...state,
        loading: false,
        loaded: true,
        errors: data,
      }
    default:
      return state
  }
}

export default activate;