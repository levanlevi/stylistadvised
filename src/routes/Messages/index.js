import { injectReducer } from '../../store/reducers';

export default (store) => ({  
  path : 'messages',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Messages = require('./containers/MessagesContainer').default;
      const reducer = require('./modules/messages').default;

      injectReducer(store, { key: 'messages', reducer });

      cb(null, Messages);
    }, 'messages');
  }
})

/*export default (store) => ({
  path: 'messages/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Messages = require('./containers/MessagesContainer').default;
      const actions = require('./modules/messages').actions;
      const reducer = require('./modules/messages').default;

      injectReducer(store, { key: 'messages', reducer });

      store
        .dispatch(actions.getMessagesForUser(nextState.params.id)) // set global spinner
        .then(() => cb(null, Messages)) // success, data loaded, render component
        .catch(cb); // return error to router (or render NotFoundComponent)
    }, 'messages');
  }
})*/
