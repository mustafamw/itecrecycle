export const setItem = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

export const getItem = (key) => {
  const data = window.sessionStorage.getItem(key) ? JSON.parse(window.sessionStorage.getItem(key)) : undefined;
  return data;
}