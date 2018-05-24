import { LOCAL_STORAGE_ACCOUNT_KEY } from 'containers/App/constants';
import { reactLocalStorage } from 'utils';

export function addAccessToken(config) {
  const account = reactLocalStorage.getObject(LOCAL_STORAGE_ACCOUNT_KEY);
  if (account.token) {
    const headers = { ...config.headers, 'X-Auth-Token': account.token };
    config.headers = headers;
  }
  return config;
}

export function onRejected(error) {
  return Promise.reject(error);
}