export const addAlert = (alert) => ({
  type: 'ADD_ALERT',
  alert
});

export const removeAlert = (index) => ({
  type: 'REMOVE_ALERT',
  index
});