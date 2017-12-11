import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'search(/:page)',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Search = require('./containers/SearchContainer').default;
      const actions = require('./modules/search').actions;
      const reducer = require('./modules/search').default;

      injectReducer(store, { key: 'search', reducer });

      store
        .dispatch(actions.getUsers())
        .then(() => cb(null, Search))
        .catch(cb);
    }, 'search');
  }
})
