const initState = {
  isLoggedIn: false,
  loading: false,
  loaded: false,
  data: undefined,
  errors: undefined,
}

const login = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
      }
    case 'SET_LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        loaded: true,
        data,
      }
    case 'SET_LOGIN_RESET':
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        loaded: false,
        data: undefined,
        errors: undefined,
      }
    case 'SET_LOGIN_ERROR':
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        loaded: true,
        errors: data,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        loaded: false,
        data: undefined,
        errors: undefined,
      }
    default:
      return state
  }
}

export default login;