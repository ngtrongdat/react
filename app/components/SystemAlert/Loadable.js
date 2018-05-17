/**
 *
 * Asynchronously loads the component for SystemAlert
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
