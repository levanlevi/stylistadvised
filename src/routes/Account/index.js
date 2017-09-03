import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'account/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Account = require('./containers/AccountContainer').default;
      const actions = require('./modules/account').actions;
      const reducer = require('./modules/account').default;

      injectReducer(store, { key: 'account', reducer });

      // store.dispatch(actions.getUser(nextState.params.id));

      // cb(null, Account);

      store
        .dispatch(actions.getUser(nextState.params.id)) // set global spinner
        .then(() => cb(null, Account)) // success, data loaded, render component
        .catch(cb); // return error to router (or render NotFoundComponent)
    }, 'account');
  }
})
