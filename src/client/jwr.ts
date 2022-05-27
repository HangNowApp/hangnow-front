const LOCAL_STORAGE_TOKEN_KEY = 'jwt_token';

const isServerSide = () => {
  return typeof window === 'undefined';
};

const setToken = (token: string) => {
  if (isServerSide()) return;
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
};

const getToken = () => {
  if (isServerSide()) return;
  return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
};

const deleteToken = () => {
  if (isServerSide()) return;
  return localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
};

const JWT = {
  setToken,
  getToken,
  deleteToken,
};

export { JWT };
