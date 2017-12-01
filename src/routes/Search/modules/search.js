// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_GET_USERS_START = 'SEARCH_GET_USERS_START';
export const SEARCH_GET_USERS_END = 'SEARCH_GET_USERS_END';

import auth from '../../auth/modules/auth';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
function getUsers() {
  return async (dispatch) => {
    
    dispatch({ type: SEARCH_GET_USERS_START, payload: { users: [], }});

    try {
      const url = config.serverUrl + '/api/users/';
      const response = await fetch(
        url,
        {
          method: 'GET',
          headers: { 'Authorization': `bearer ${auth.getToken()}`},
        }
      );
      const users = await response.json();

      dispatch({ type: SEARCH_GET_USERS_END, payload: { users: users, }});
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred while updating the place.'));
    }
  }
}

export const actions = {
  getUsers,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_GET_USERS_START]: (state, action) => state = action.payload,
  [SEARCH_GET_USERS_END]: (state, action) => state = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  users: [],
};

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
