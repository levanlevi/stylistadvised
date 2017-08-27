// ------------------------------------
// Constants
// ------------------------------------
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT'

// ------------------------------------
// Actions
// ------------------------------------
export function submit (value) {
  return { type: SIGNUP_SUBMIT, payload: value };
}

export const actions = {
  submit,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
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
  signin: {
    isLogin: false,
  }
}

export default function signinReducer (state = initialState.signin, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
