import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookies = (key, value) => {
  cookies.set(key, value, {
    path: '/',
    secure: false,
    sameSite: true
  });
};

export const getCookies = (key) => {
  return cookies.get(key);
};

export const removeCookies = (key) => {
  cookies.remove(key, {
    path: '/',
    secure: false,
    sameSite: true,
  });
};

