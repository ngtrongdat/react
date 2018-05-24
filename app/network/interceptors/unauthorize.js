import { Actions } from 'react-native-router-flux';
import { AccessTokenManager } from '@data';

const UnauthorizeStatusCode = 401;
const LoginScene = 'login';

export function onFullfilled(response) {
  return Promise.resolve(response);
}

export function onRejected(error) {
  if (error) {
    const config = error.config;
    const response = error.response;
    if (response && Actions.currentScene !== LoginScene && UnauthorizeStatusCode == response.status) {
      AccessTokenManager.clear();
      Actions.reset(LoginScene);
    }
    return Promise.reject(error);
  }
}