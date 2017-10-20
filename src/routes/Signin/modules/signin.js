// ------------------------------------
// Constants
// ------------------------------------
export const SIGNIN_SUBMIT = 'SIGNIN_SUBMIT';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
function isEmailValid(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}

function anyElementsEmpty(elements) {
  for (let element in elements) {
    if (!elements[element]) {
      return true;
    }
  }

  return false;
}

export function submit(user) {
  if (anyElementsEmpty({ email: user.email, password: user.password }) || !isEmailValid(user.email)) {
    let result = {
      success: false,
      message: 'Check the form for errors.',
      errors: {
        email: 'Please provide your email address.',
        password: 'Please provide your password.'
      }
    }

    return { type: SIGNIN_SUBMIT, payload: result };
  }

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
  
      const result = await response.json();

      dispatch({ type: SIGNIN_SUBMIT, payload: result });
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
  [SIGNIN_SUBMIT]: (state, action) => state = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  success: true,
}

export default function signinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
