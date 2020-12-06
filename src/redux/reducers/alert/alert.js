const initState = {
  alert: []
}

const alert = (state = initState, action) => {
  const { type, alert, index } = action;
  switch (type) {
    case 'ADD_ALERT':
      return {
        ...state,
        alert: state.alert.concat(alert),
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: [...state.alert.slice(0, index), ...state.alert.slice(index + 1)]
      };
    default:
      return state
  }
}

export default alert;