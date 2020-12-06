const initState = {
  loading: false,
  loaded: false,
  data: undefined,
  errors: undefined,
}

const signup = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'SIGNUP':
      return {
        ...state,
        loading: true,
      }
    case 'SET_SIGNUP':
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      }
    case 'SET_SIGNUP_RESET':
      return {
        ...state,
        loading: false,
        loaded: false,
        data: undefined,
        errors: undefined,
      }
    case 'SET_SIGNUP_ERROR':
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

export default signup;