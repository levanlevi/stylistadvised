import PageLayout from '../layouts/PageLayout/PageLayout';

import Home from './Home';

import AccountRoute from './Account';
import EmailConfirmationRoute from './EmailConfirmation';
import MessagesRoute from './Messages';
import PageNotFoundRoute from './404';
import PasswordRecoveryRoute from './PasswordRecovery';
import SearchRoute from './Search';
import SigninRoute from './Signin';
import SignupRoute from './Signup';

export const createRoutes = (store) => ([{
  path        : '/',
  component   : PageLayout,
  indexRoute  : Home,
  childRoutes : [
    AccountRoute(store),
    MessagesRoute(store),
    PasswordRecoveryRoute(store),
    SearchRoute(store),
    SigninRoute(store),
    SignupRoute(store),
  ]
}, {
  path: 'email-confirmed',
  indexRoute: EmailConfirmationRoute,
}, {
  path: '*',
  indexRoute: PageNotFoundRoute,
}])

export default createRoutes;
