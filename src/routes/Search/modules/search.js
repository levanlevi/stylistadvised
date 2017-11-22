// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_USERS_RECEIVED = 'SEARCH_USERS_RECEIVED';

import auth from '../../auth/modules/auth';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
function getUsers() {
  return async (dispatch) => {
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

      dispatch({ type: SEARCH_USERS_RECEIVED, payload: users });
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
  [SEARCH_USERS_RECEIVED]: (state, action) => state = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
