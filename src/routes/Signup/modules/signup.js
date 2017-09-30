// ------------------------------------
// Constants
// ------------------------------------
const errorMessage = 'Check the form for errors.';

const emptyEmailError = 'Please provide your email address.';
const emptyNameError = 'Please provide your name.';
const emptyPasswordError = 'Please provide your password.';

const invalidEmailError = 'Please provide a correct email address.';
const invalidPasswordError = 'Password must have at least 8 characters.';

export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
function isEmailValid(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}

function isPasswordValid(password) {
  return 8 <= password.trim().length;
}

function isUserValid(user) {
  return user.email && user.name && user.password && isEmailValid(user.email);
}

function getErrors(user) {
  let result = {};
  if (!user.email) {
    result.email = emptyEmailError;
  } else if (!isEmailValid(user.email)) {
    result.email = invalidEmailError;
  }

  if (!user.name) {
    result.name = emptyNameError;
  }

  if (!user.password) {
    result.password = emptyPasswordError;
  } else if (!isPasswordValid(user.password)) {
    result.password = invalidPasswordError;
  }

  return result;
}

export function submit(user) {
  if (!isUserValid(user)) {
    let result = {
      success: false,
      message: errorMessage,
      errors: getErrors(user),
    }

    return { type: SIGNUP_SUBMIT, payload: result };
  }

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
  
      const result = await response.json();

      dispatch({ type: SIGNUP_SUBMIT, payload: result });
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
  [SIGNUP_SUBMIT]: (state, action) => state = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  success: true,
  errors: {}
}

export default function signupReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
