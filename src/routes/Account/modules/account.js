// ------------------------------------
// Constants
// ------------------------------------
export const ACCOUNT_GET_USER_START = 'ACCOUNT_GET_USER_START';
export const ACCOUNT_GET_USER_END = 'ACCOUNT_GET_USER_END';
export const ACCOUNT_USER_SUBMIT = 'ACCOUNT_USER_SUBMIT';

import auth from '../../auth/modules/auth';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
function isValidId(id) {
  return id.match(/^[0-9a-fA-F]{24}$/);
}

export function getUser(userId) {
  return async (dispatch) => {
    dispatch({ type: ACCOUNT_GET_USER_START, payload: { loading: true, user: {}, }});

    try {
      if (isValidId(userId)) {
        const url = config.serverUrl + '/api/users/' + userId;
        const response = await fetch(
          url,
          {
            method: 'GET',
            headers: { 'Authorization': `bearer ${auth.getToken()}`},
          }
        );
        const user = await response.json();

        dispatch({ type: ACCOUNT_GET_USER_END, payload: { loading: false, user: user }});  
      }
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred while updating the place.'));
    }
  }
}

export function submit(user) {
  return async (dispatch) => {
    try {
      if (isValidId(user._id)) {
        const url = config.serverUrl + '/api/users/' + user._id;
        await fetch(
          url,
          {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: { 'Authorization': `bearer ${auth.getToken()}`, 'Content-type': 'application/json' },
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
  [ACCOUNT_GET_USER_START]: (state, action) => state = action.payload,
  [ACCOUNT_GET_USER_END]: (state, action) => state = action.payload,
  [ACCOUNT_USER_SUBMIT]: (state, action) => state,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  user: {},
}

export default function signinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
