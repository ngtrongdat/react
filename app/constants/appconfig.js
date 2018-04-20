/**
 * Global App Config
 */

/* global __DEV__ */
const TEST_API_BASE_URL='https://test.prism.horse/api'
const PREBETA_API_BASE_URL='http://prebeta.prism.horse/api'
const PREPRO_API_BASE_URL='http://prepro.prism.horse/api'
const BETA_API_BASE_URL='https://beta.prism.horse/api'
const PRO_API_BASE_URL='https://www.prism.horse/api'

const GCM_SENDER_ID='261299604758'

export default {
  // App Details
  appName: 'Prism',

  // Build Configuration - eg. Debug or Release?
  // DEV: __DEV__,

  // Google Analytics - uses a 'dev' account while we're testing
  // gaTrackingId: (__DEV__) ? 'UA-84284256-2' : 'UA-84284256-1',

  // platform type 3: web
  platformType: 3,

  // from now on Prism v2 will be rewritten using React Native
  platformVersion: '2.0',

  // URLs
  API_BASE_URL: {
    test: TEST_API_BASE_URL,
    prebeta: PREBETA_API_BASE_URL,
    prepro: PREPRO_API_BASE_URL,
    beta: BETA_API_BASE_URL,
    pro: PRO_API_BASE_URL,
  },

};
