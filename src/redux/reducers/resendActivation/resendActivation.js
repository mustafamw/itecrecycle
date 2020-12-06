const initState = {
  loading: false,
  loaded: false,
  data: undefined,
  errors: undefined,
}

const resendActivation = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'RESEND_ACTIVATION':
      return {
        ...state,
        loading: true,
      }
    case 'SET_RESEND_ACTIVATION':
      return {
        ...state,
        data,
        loading: false,
        loaded: true,
      }
    case 'SET_RESEND_ACTIVATION_RESET':
      return {
        ...state,
        data: undefined,
        loading: false,
        loaded: false,
        errors: undefined,
      }
    case 'SET_RESEND_ACTIVATION_ERROR':
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

export default resendActivation;