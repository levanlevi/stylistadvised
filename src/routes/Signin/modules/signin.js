// ------------------------------------
// Constants
// ------------------------------------
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT'

// ------------------------------------
// Actions
// ------------------------------------
export function submit () {
  console.log('submit');
  return { type: SIGNUP_SUBMIT, payload: value };
}

export const actions = {
  submit,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNUP_SUBMIT]    : (state, action) => state + action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

export default function signinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
