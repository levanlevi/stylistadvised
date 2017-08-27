import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path : 'signup',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Signup = require('./containers/SignupContainer').default;
      const reducer = require('./modules/signup').default;

      injectReducer(store, { key: 'signup', reducer });

      cb(null, Signup);
    }, 'signup');
  }
})
