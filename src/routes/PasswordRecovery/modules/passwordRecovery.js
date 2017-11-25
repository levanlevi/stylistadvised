// ------------------------------------
// Constants
// ------------------------------------
const errorMessage = 'Check the form for errors.';

const invalidEmailError = 'Please provide a correct email address.';

export const PASSWORD_RECOVERY_SUBMIT = 'PASSWORD_RECOVERY_SUBMIT';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
function isEmailValid(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}

export function submit(email) {
  if (!isEmailValid(email)) {
    let result = {
      success: false,
      message: errorMessage,
      errors: {
        email: invalidEmailError,
      }
    }

    return { type: PASSWORD_RECOVERY_SUBMIT, payload: result };
  }

  return async (dispatch) => {
    try {
      const url = config.serverUrl + '/auth/login';
      const response = await fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify(email),
          headers: { 'Content-type': 'application/json' },
        }
      );
  
      const result = await response.json();

      dispatch({ type: PASSWORD_RECOVERY_SUBMIT, payload: result });
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
  [PASSWORD_RECOVERY_SUBMIT]: (state, action) => state = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  success: true,
  errors: {
    email: null,
  },
}

export default function passwordRecoveryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
