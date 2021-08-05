const initState = {
  loading: false,
  loaded: false,
  data: undefined,
  errors: undefined,
}

const resetPasswordValid = (state = initState, action) => {
  const { type, data, errors } = action;
  switch (type) {
    case 'RESET_PASSWORD_VALID':
      return {
        ...state,
        loading: true,
      }
    case 'SET_RESET_PASSWORD_VALID':
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      }
    case 'SET_RESET_PASSWORD_VALID_ERROR':
      return {
        ...state,
        loading: false,
        loaded: true,
        errors,
      }
    default:
      return state
  }
}

export default resetPasswordValid;