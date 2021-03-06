// ------------------------------------
// Constants
// ------------------------------------
const errorMessage = 'Check the form for errors.';

const emptyEmailError = 'Please provide your email address.';
const emptyPasswordError = 'Please provide your password.';

const invalidEmailError = 'Please provide a correct email address.';
const invalidPasswordError = 'Password must have at least 8 characters.';

export const SIGNIN_SUBMIT = 'SIGNIN_SUBMIT';

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
  if (anyElementsEmpty({ email: user.email, password: user.password })) {
    let result = {
      success: false,
      message: errorMessage,
      errors: {
        email: user.email ? null : emptyEmailError,
        password: user.password ? null : emptyPasswordError,
      }
    }

    return { type: SIGNIN_SUBMIT, payload: result };
  }

  if (!isEmailValid(user.email)) {
    let result = {
      success: false,
      message: errorMessage,
      errors: {
        email: invalidEmailError,
        password: null,
      }
    }

    return { type: SIGNIN_SUBMIT, payload: result };
  }

  return async (dispatch) => {
    try {
      const url = API + '/auth/login';
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
  errors: {
    email: null,
    password: null,
  },
}

export default function signinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
