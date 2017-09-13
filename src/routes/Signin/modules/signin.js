// ------------------------------------
// Constants
// ------------------------------------
export const SIGNIN_SUBMIT = 'SIGNIN_SUBMIT';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
export function submit (value) {
  return { type: SIGNIN_SUBMIT, payload: value };
}

export const actions = {
  submit,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNIN_SUBMIT]: (state, action) => login(action.payload, state),
}

async function login(user, state) {
  try {
    console.log(user);
    // create a string for an HTTP body message
    const email = encodeURIComponent(user.email);
    const password = encodeURIComponent(user.password);
    const formData = `email=${email}&password=${password}`;

    const url = config.serverUrl + '/auth/login';
    const response = await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      }
    );

    const user = await response.json();
  } catch (error) {
    //dispatch(addToast('danger', 'An error occurred while updating the place.'));
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  signin: {
    isLogin: false,
  }
}

export default function signinReducer (state = initialState.signin, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
