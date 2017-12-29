// ------------------------------------
// Constants
// ------------------------------------
export const MESSAGES_GET_CHANNELS_FOR_USER_START = 'MESSAGES_GET_CHANNELS_FOR_USER_START';
export const MESSAGES_GET_CHANNELS_FOR_USER_END = 'MESSAGES_GET_CHANNELS_FOR_USER_END';
export const MESSAGES_MESSAGES_FOR_CHANNEL_RECEIVED = 'MESSAGES_MESSAGES_FOR_CHANNEL_RECEIVED';

import auth from '../../auth/modules/auth';

const config = require('../../../../config');

const away = 'away';
const online = 'online';
const offline = 'offline';

const defaultChannels = [
  { name: 'flatorez+SnowFlake', id: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', private: true, between: [ { id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, { id: '59eca2d1f0626a17ad08ddd3', name: 'SnowFlake' } ], status: offline, isActiveChannel: false, lastMessage: { id: '4', channelId: '1', text: 'I am fine, thanks!', user: { id: '59eca2d1f0626a17ad08ddd3', name: 'SnowFlake' }, time: 'Dec 1, 2017 6:18 PM' }, },
  { name: 'flatorez+velhover', id: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', private: true, between: [ { id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, { id: '5a2928767ce45202194fba23', name: 'velhover' } ], status: offline, isActiveChannel: false, lastMessage: { id: '8', channelId: '2', text: 'I am fine, thanks!', user: { id: '5a2928767ce45202194fba23', name: 'velhover' }, time: 'Dec 1, 2017 6:18 PM' }, },
];
const defaultMessages = [
  { id: '1', channelId: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', text: 'Hi!', user: { id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, time: 'Dec 1, 2017 6:16 PM' },
  { id: '2', channelId: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', text: 'Good evening!', user: { id: '59eca2d1f0626a17ad08ddd3', name: 'SnowFlake' }, time: 'Dec 1, 2017 6:17 PM' },
  { id: '3', channelId: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', text: 'How are you?', user: { id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, time: 'Dec 1, 2017 6:17 PM' },
  { id: '4', channelId: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', text: 'I am fine, thanks!', user: { id: '59eca2d1f0626a17ad08ddd3', name: 'SnowFlake' }, time: 'Dec 1, 2017 6:18 PM' },

  { id: '5', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'Good evening!', user: { id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, time: 'Dec 1, 2017 6:16 PM' },
  { id: '6', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'Hello!', user: { id: '5a2928767ce45202194fba23', name: 'velhover' }, time: 'Dec 1, 2017 6:17 PM' },
  { id: '7', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'Nice to see you!', user: { id: '5a2928767ce45202194fba23', name: 'velhover' }, time: 'Dec 1, 2017 6:17 PM' },
  { id: '8', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'How are you?', user: { id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, time: 'Dec 1, 2017 6:17 PM' },
  { id: '9', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'I am fine, thanks!', user: { id: '5a2928767ce45202194fba23', name: 'velhover' }, time: 'Dec 1, 2017 6:18 PM' },
];

// ------------------------------------
// Actions
// ------------------------------------
function isValidId(id) {
  return id.match(/^[0-9a-fA-F]{24}$/);
}

export function getChannelsForUser(userId) {
  return async (dispatch) => {
    try {
      if (isValidId(userId)) {
        dispatch({ type: MESSAGES_GET_CHANNELS_FOR_USER_START, payload: { loading: true, channels: [], messages: [], }});

        // const url = config.serverUrl + '/api/channels/' + userId;
        // const response = await fetch(
        //   url,
        //   {
        //     method: 'GET',
        //     headers: { 'Authorization': `bearer ${auth.getToken()}`},
        //   }
        // );
        // const channels = await response.json();
        const channels = defaultChannels;

        dispatch({ type: MESSAGES_GET_CHANNELS_FOR_USER_END, payload: { loading: false, channels: channels, messages: [], }});
      }
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred while updating the place.'));
    }
  }
}

export function getMessagesForChannel(channelId) {
  return async (dispatch) => {
    try {
      dispatch({ type: MESSAGES_MESSAGES_FOR_CHANNEL_RECEIVED, payload: defaultMessages });
      // if (isValidId(userId)) {
      //   const url = config.serverUrl + '/api/users/' + userId;
      //   const response = await fetch(
      //     url,
      //     {
      //       method: 'GET',
      //       headers: { 'Authorization': `bearer ${auth.getToken()}`},
      //     }
      //   );
      //   const messages = await response.json();

      //   const messages = [];

      //   dispatch({ type: MESSAGES_MESSAGES_FOR_CHANNEL_RECEIVED, payload: messages });  
      // }
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred while updating the place.'));
    }
  }
}

export const actions = {
  getChannelsForUser,
  getMessagesForChannel,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MESSAGES_GET_CHANNELS_FOR_USER_START]: (state, action) => state = action.payload,
  [MESSAGES_GET_CHANNELS_FOR_USER_END]: (state, action) => state = action.payload,
  [MESSAGES_MESSAGES_FOR_CHANNEL_RECEIVED]: (state, action) => { state.messages = action.payload; return state; },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  channels: [],
  messages: [],
};

export default function messagesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
