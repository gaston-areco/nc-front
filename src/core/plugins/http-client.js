import trae from 'trae';

export function configHttpClient() {
  const jwtConfig = async (config) => {
    const token = localStorage.getItem('access_token')
      ? JSON.parse(localStorage.getItem('access_token'))
      : '';

    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';
    config.cache = 'no-cache';
    config.mode = 'cors';

    return config;
  };

  const fullfillMiddleware = (res) => {
    return res;
  };

  const rejectMiddleware = (error) => {
    const appError = {
      code: '',
      message: error.data
    };
    return Promise.reject(appError);
  };

  trae.before(jwtConfig);
  trae.after(fullfillMiddleware, rejectMiddleware);
}

export default trae;
