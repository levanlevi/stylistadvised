import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'signin',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Signin = require('./containers/SigninContainer').default;
      const reducer = require('./modules/signin').default;

      injectReducer(store, { key: 'signin', reducer });

      cb(null, Signin);
    }, 'signin');
  }
})
