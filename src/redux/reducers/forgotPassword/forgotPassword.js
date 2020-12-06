const initState = {
  loading: false,
  loaded: false,
  data: undefined,
  errors: undefined,
}

const forgotPassword = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'FORGOT_PASSWORD':
      return {
        ...state,
        loading: true,
      }
    case 'SET_FORGOT_PASSWORD':
      return {
        ...state,
        data,
        loading: false,
        loaded: true,
      }
    case 'SET_FORGOT_PASSWORD_ERROR':
      return {
        ...state,
        errors: data,
        loading: false,
        loaded: true,
      }
    default:
      return state
  }
}

export default forgotPassword;