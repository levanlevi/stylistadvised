import { injectReducer } from '../../store/reducers';

export default (store) => ({  
  path : 'account/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Account = require('./containers/AccountContainer').default;
      const reducer = require('./modules/account').default;

      injectReducer(store, { key: 'account', reducer });

      cb(null, Account);
    }, 'account');
  }
})
