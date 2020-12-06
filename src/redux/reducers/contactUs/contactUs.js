const initState = {
  loading: false,
  loaded: false,
  data: undefined,
  errors: undefined,
}

const contactUs = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CONTACT_US':
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
      }
    case 'SET_CONTACT_US':
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      }
    case 'SET_CONTACT_US_ERROR':
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: data,
      }
    default:
      return state
  }
}

export default contactUs;