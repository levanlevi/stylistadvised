import { injectReducer } from '../../store/reducers'

export default (store) => ({  
  path : 'password-recovery',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PasswordRecovery = require('./containers/PasswordRecoveryContainer').default;
      const reducer = require('./modules/passwordRecovery').default;

      injectReducer(store, { key: 'passwordRecovery', reducer });

      cb(null, PasswordRecovery);
    }, 'passwordRecovery');
  }
})
