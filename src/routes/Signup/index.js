import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'signup/:userType',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Signup = require('./containers/SignupContainer').default;
      const actions = require('./modules/signup').actions;
      const reducer = require('./modules/signup').default;

      injectReducer(store, { key: 'signup', reducer });

      store.dispatch(actions.setUserType(nextState.params.userType));

      cb(null, Signup);
    }, 'signup');
  }
})
