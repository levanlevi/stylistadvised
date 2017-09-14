// ------------------------------------
// Constants
// ------------------------------------
export const SIGNIN_SUBMIT = 'SIGNIN_SUBMIT';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
export function submit(user) {
  return async (dispatch) => {
    try {
      const url = config.serverUrl + '/auth/login';
      const response = await fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify(user),
          headers: { 'Content-type': 'application/json' },
        }
      );
  
      const token = await response.json();

      dispatch({ type: SIGNIN_SUBMIT, payload: token });
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred while updating the place.'));
    }
  }
}

export const actions = {
  submit,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNIN_SUBMIT]: (state, action) => state.token = action.payload.token,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  signin: {
    token: null,
  }
}

export default function signinReducer (state = initialState.signin, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
