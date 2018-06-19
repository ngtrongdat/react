import { createCanBoundTo } from '@casl/react';
import defineAbilitiesFor from '../../utils/ability';
import { reactLocalStorage } from 'utils';
import { LOCAL_STORAGE_ACCOUNT_KEY } from 'containers/App/constants';

export const authentication = reactLocalStorage.getObject(LOCAL_STORAGE_ACCOUNT_KEY);
export default createCanBoundTo(defineAbilitiesFor(authentication.account.permission));