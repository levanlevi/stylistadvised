// ------------------------------------
// Constants
// ------------------------------------
export const ACCOUNT_USER_RECEIVED = 'ACCOUNT_USER_RECEIVED'
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';

//const baseUrl = 'http://stylistadvised.me';
const baseUrl = 'http://localhost:3000';

// ------------------------------------
// Actions
// ------------------------------------
export function getUser(userId) {
  return async (dispatch) => {
    try {
      if (userId.match(/^[0-9a-fA-F]{24}$/)) {
        const url = baseUrl + '/api/users/' + userId;
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

export function submit (value) {
  return { type: SIGNUP_SUBMIT, payload: value };
}

export const actions = {
  getUser,
  submit,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACCOUNT_USER_RECEIVED]: (state, action) => state.user = action.payload,
  [SIGNUP_SUBMIT]: (state, action) => login(action.payload, state),
}

function login(user, state) {
  //state.isLogin = true;
  console.log(user);

  return null;
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  account: {
    user: {
      name: "",
      password: "",
      isKeepSignedIn: false,
    },
  }
}

export default function signinReducer (state = initialState.account, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
