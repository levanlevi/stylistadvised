import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'messages/:id(/:channel)',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Messages = require('./containers/MessagesContainer').default;
      const actions = require('./modules/messages').actions;
      const reducer = require('./modules/messages').default;

      injectReducer(store, { key: 'messages', reducer });

      store
        .dispatch(actions.getMessagesForUser(nextState.params.id))
        .then(() => cb(null, Messages))
        .catch(cb);
    }, 'messages');
  }
})
