import CoreLayout from '../layouts/PageLayout/PageLayout';

import Home from './Home';

import AccountRoute from './Account';
import PageNotFound from './404';
import SearchRoute from './Search';
import SigninRoute from './Signin';
import SignupRoute from './Signup';

export const createRoutes = (store) => ([{
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    AccountRoute(store),
    SearchRoute(store),
    SigninRoute(store),
    SignupRoute(store),
  ]
}, {
  path: '*',
  indexRoute: PageNotFound,
}])

export default createRoutes;
