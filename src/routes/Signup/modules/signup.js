// ------------------------------------
// Constants
// ------------------------------------
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
export function submit(user) {
  return async (dispatch) => {
    try {
      const url = config.serverUrl + '/auth/signup';
      const response = await fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify(user),
          headers: { 'Content-type': 'application/json' },
        }
      );
  
      const temp = await response.json();
      console.log(temp);

      dispatch({ type: SIGNUP_SUBMIT, payload: temp });
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
  [SIGNUP_SUBMIT]: (state, action) => (state, action) => state.token = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function signupReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
