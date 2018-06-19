import axios from 'axios';
import { AppConfig, Env, Endpoints } from '../constants';
import Fingerprint2 from 'fingerprintjs2';
import md5 from 'md5';

import * as AccessTokenInterceptor from './interceptors/accessToken';

const getInstance = (env) => {
  const instance = axios.create({
    baseURL: AppConfig.API_BASE_URL[env],
    timeout: 30000,
  });

  // instance.interceptors.response.use(
  //   UnauthorizeInterceptor.onFullfilled,
  //   UnauthorizeInterceptor.onRejected,
  // );

  // instance.interceptors.request.use(
  //   LogInterceptor.requestLog,
  //   LogInterceptor.requestError,
  // );

  // instance.interceptors.response.use(
  //   LogInterceptor.responseLog,
  //   LogInterceptor.responseError,
  // );

  instance.interceptors.request.use(
    AccessTokenInterceptor.addAccessToken,
    AccessTokenInterceptor.onRejected
  );
  return instance;
}


const API = {
  env: Env.test,
  instance: getInstance(Env.test),
};

/**
 * Auth API
 */
API.getDeviceId = () => {
  return new Promise((resolve, reject) => {
    new Fingerprint2().get((result) => {
      resolve(result);
    });
  });
}

API.login = (loginInfo, deviceId) => {
  const headers = {
    'X-Auth-Username': loginInfo.username,
    'X-Auth-Password': md5(loginInfo.password),
  };
  const data = {
    platformType: AppConfig.platformType,
    platformVersion: AppConfig.platformVersion,
    deviceToken: deviceId,
    deviceId: deviceId,
  };

  return API.instance.post(Endpoints.LOGIN_URL, data, {
    headers: { ...headers },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    throw error;
  });
};

/**
 * Horse API
 */
API.getHorsesList = (request) => {
  return API.instance.post(Endpoints.HORSE_LIST_URL, request)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    throw error;
  });
};

export default API;
