// ------------------------------------
// Constants
// ------------------------------------
export const MESSAGES_MESSAGES_FOR_USER_RECEIVED = 'MESSAGES_MESSAGES_FOR_USER_RECEIVED';

import auth from '../../auth/modules/auth';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
function isValidId(id) {
  return id.match(/^[0-9a-fA-F]{24}$/);
}

export function getMessagesForUser(userId) {
  return async (dispatch) => {
    try {
      if (isValidId(userId)) {
        // const url = config.serverUrl + '/api/users/' + userId;
        // const response = await fetch(
        //   url,
        //   {
        //     method: 'GET',
        //     headers: { 'Authorization': `bearer ${auth.getToken()}`},
        //   }
        // );
        // const messages = await response.json();

        const messages = [];

        dispatch({ type: MESSAGES_MESSAGES_FOR_USER_RECEIVED, payload: messages });  
      }
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred while updating the place.'));
    }
  }
}

export const actions = {
  getMessagesForUser,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MESSAGES_MESSAGES_FOR_USER_RECEIVED]: (state, action) => state = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];

export default function messagesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
