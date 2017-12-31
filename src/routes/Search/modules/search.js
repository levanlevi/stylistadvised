// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_GET_USERS_START = 'SEARCH_GET_USERS_START';
export const SEARCH_GET_USERS_END = 'SEARCH_GET_USERS_END';
export const SEARCH_SET_CHANNEL = 'SEARCH_SET_CHANNEL';
export const SEARCH_SET_MESSAGE = 'SEARCH_SET_MESSAGE';

import auth from '../../auth/modules/auth';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
function getPagination(page) {
  const itemsOnPage = config.itemsOnSearchPage;
  let pagination = '&limit=' + itemsOnPage;
  if (page && 1 < +page) {
    pagination = '&skip=' + (+page - 1) * itemsOnPage + '&limit=' + itemsOnPage;
  }

  return pagination;
}

export function getUsers(page) {
  return async (dispatch) => {

    dispatch({ type: SEARCH_GET_USERS_START, payload: { loading: true, count: 0, itemsOnPage: 0, users: [], }});

    try {
      const pagination = getPagination(page);
      const url = config.serverUrl + '/api/users?userType=stylist' + pagination;
      const response = await fetch(
        url,
        {
          method: 'GET',
          headers: { 'Authorization': `bearer ${auth.getToken()}` },
        }
      );

      const data = await response.json();
      const itemsOnPage = config.itemsOnSearchPage;

      dispatch({ type: SEARCH_GET_USERS_END, payload: { loading: false, count: data.count, itemsOnPage: itemsOnPage, users: data.users, }});
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred.'));
    }
  }
}

export function setChannel(channel) {
  return async (dispatch) => {
    try {
      const url = config.serverUrl + '/api/channels';
      const response = await fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify(channel),
          headers: { 'Authorization': `bearer ${auth.getToken()}`, 'Content-type': 'application/json' },
        }
      );
  
      const result = await response.json();

      dispatch({ type: SEARCH_SET_CHANNEL, payload: result });
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred.'));
    }
  }
}

export function setMessage(message) {
  return async (dispatch) => {
    try {
      const url = config.serverUrl + '/api/messages';
      const response = await fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify(message),
          headers: { 'Authorization': `bearer ${auth.getToken()}`, 'Content-type': 'application/json' },
        }
      );
  
      const result = await response.json();

      dispatch({ type: SEARCH_SET_MESSAGE, payload: result });
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred.'));
    }
  }
}

export const actions = {
  getUsers,
  setChannel,
  setMessage,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_GET_USERS_START]: (state, action) => state = action.payload,
  [SEARCH_GET_USERS_END]: (state, action) => state = action.payload,
  [SEARCH_SET_CHANNEL]: (state, action) => state = { ...state, channel: action.payload },
  [SEARCH_SET_MESSAGE]: (state, action) => state,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  count: 0,
  itemsOnPage: 0,
  channel: {},
  users: [],  
};

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
