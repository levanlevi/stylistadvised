// ------------------------------------
// Constants
// ------------------------------------
export const ACCOUNT_USER_RECEIVED = 'ACCOUNT_USER_RECEIVED';
export const ACCOUNT_USER_SUBMIT = 'ACCOUNT_USER_SUBMIT';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
export function getUser(userId) {
  return async (dispatch) => {
    try {
      if (userId.match(/^[0-9a-fA-F]{24}$/)) {
        const url = config.serverUrl + '/api/users/' + userId;
        const response = await fetch(
          url,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const user = await response.json();

        dispatch({ type: ACCOUNT_USER_RECEIVED, payload: user });  
      }
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred while updating the place.'));
    }
  }
}

export function submit (user) {
  return async (dispatch) => {
    try {
      if (user._id.match(/^[0-9a-fA-F]{24}$/)) {
        const url = config.serverUrl + '/api/users/' + user._id;
        await fetch(
          url,
          {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },
          }
        );

        dispatch({ type: ACCOUNT_USER_SUBMIT });
      }
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred while updating the place.'));
    }
  }
}

export const actions = {
  getUser,
  submit,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACCOUNT_USER_RECEIVED]: (state, action) => state = action.payload,
  [ACCOUNT_USER_SUBMIT]: (state, action) => state,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function signinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
