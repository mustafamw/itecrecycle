const initState = {
  loading: false,
  loaded: false,
  data: undefined,
  errors: undefined,
}

const resetPassword = (state = initState, action) => {
  const { type, data, errors } = action;
  switch (type) {
    case 'RESET_PASSWORD':
      return {
        ...state,
        loading: true,
      }
    case 'SET_RESET_PASSWORD':
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      }
    case 'SET_RESET_PASSWORD_ERROR':
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

export default resetPassword;