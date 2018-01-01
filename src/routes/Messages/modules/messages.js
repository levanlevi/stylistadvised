// ------------------------------------
// Constants
// ------------------------------------
export const MESSAGES_GET_CHANNELS_FOR_USER_START = 'MESSAGES_GET_CHANNELS_FOR_USER_START';
export const MESSAGES_GET_CHANNELS_FOR_USER_END = 'MESSAGES_GET_CHANNELS_FOR_USER_END';
export const MESSAGES_MESSAGES_FOR_CHANNEL_START = 'MESSAGES_MESSAGES_FOR_CHANNEL_START';
export const MESSAGES_MESSAGES_FOR_CHANNEL_END = 'MESSAGES_MESSAGES_FOR_CHANNEL_END';

import auth from '../../auth/modules/auth';

const config = require('../../../../config');

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
        dispatch({ type: MESSAGES_GET_CHANNELS_FOR_USER_START, payload: { loading: true, channels: [], }});

        const url = (config.serverUrl + '/api/channels?userId=' + userId);
        const response = await fetch(
          url,
          {
            method: 'GET',
            headers: { 'Authorization': `bearer ${auth.getToken()}` },
          }
        );

        const channels = await response.json();

        dispatch({ type: MESSAGES_GET_CHANNELS_FOR_USER_END, payload: { loading: false, channels: channels, }});
      }
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred.'));
    }
  }
}

export function getMessagesForChannel(channelId) {
  return async (dispatch) => {
    try {
      dispatch({ type: MESSAGES_MESSAGES_FOR_CHANNEL_START, payload: { loading: true, messages: [], }});

      const url = (config.serverUrl + '/api/messages?channelId=' + channelId);
      const response = await fetch(
        url,
        {
          method: 'GET',
          headers: { 'Authorization': `bearer ${auth.getToken()}` },
        }
      );

      const messages = await response.json();

      dispatch({ type: MESSAGES_MESSAGES_FOR_CHANNEL_END, payload: { loading: false, messages: messages, } });
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred.'));
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
  [MESSAGES_GET_CHANNELS_FOR_USER_START]: (state, action) => state = { ...state, channelsLoading: action.payload.loading, channels: action.payload.channels, messages: null },
  [MESSAGES_GET_CHANNELS_FOR_USER_END]: (state, action) => state = { ...state, channelsLoading: action.payload.loading, channels: action.payload.channels, messages: null },
  [MESSAGES_MESSAGES_FOR_CHANNEL_START]: (state, action) => state = { ...state, messagesLoading: action.payload.loading, messages: action.payload.messages },
  [MESSAGES_MESSAGES_FOR_CHANNEL_END]: (state, action) => state = { ...state, messagesLoading: action.payload.loading, messages: action.payload.messages },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  channelsLoading: false,
  messagesLoading: false,
  channels: [],
  messages: null,
};

export default function messagesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
