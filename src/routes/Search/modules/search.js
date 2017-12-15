// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_GET_USERS_START = 'SEARCH_GET_USERS_START';
export const SEARCH_GET_USERS_END = 'SEARCH_GET_USERS_END';

import auth from '../../auth/modules/auth';

const config = require('../../../../config');

const defaultResponse = {
  count: 39,
  users: [
    { _id: '59eca251f0626a17ad08ddd2', name: 'flatorez', fname: 'Ilya', lname: 'Gurfinkel', aboutMe: 'This is where I sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key.' },
    { _id: '59eca2d1f0626a17ad08ddd3', name: 'SnowFlake', fname: 'Snow', lname: 'Flake', aboutMe: 'This is where I sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key.' },
    { _id: '5a2928767ce45202194fba23', name: 'velhover', fname: '', lname: 'Velhover', aboutMe: 'This is where I sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key.' },
    { _id: '5a2928767ce45202194fba24', name: 'dimentberg', fname: '', lname: 'Dimentberg', aboutMe: 'This is where I sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key.' },
    { _id: '5a2928767ce45202194fba25', name: 'insteadoffork', fname: '', lname: '', aboutMe: 'This is where I sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key.' },
    { _id: '5a2928767ce45202194fba25', name: 'InsteadOfSpoon', fname: '', lname: '', aboutMe: 'This is where I sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key.' },
  ],
}

// ------------------------------------
// Actions
// ------------------------------------
function getUsers(page) {
  return async (dispatch) => {

    dispatch({ type: SEARCH_GET_USERS_START, payload: { count: 0, itemsOnPage: 0, users: [], }});

    try {
      const itemsOnPage = config.itemsOnSearchPage;

      // const url = config.serverUrl + '/api/users/';
      // const response = await fetch(
      //   url,
      //   {
      //     method: 'GET',
      //     headers: { 'Authorization': `bearer ${auth.getToken()}`},
      //   }
      // );
      // const users = await response.json();

      const count = defaultResponse.count;
      const users = defaultResponse.users;

      dispatch({ type: SEARCH_GET_USERS_END, payload: { count: count, itemsOnPage: itemsOnPage, users: users, }});
    } catch (error) {
      //dispatch(addToast('danger', 'An error occurred while updating the place.'));
    }
  }
}

export const actions = {
  getUsers,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_GET_USERS_START]: (state, action) => state = action.payload,
  [SEARCH_GET_USERS_END]: (state, action) => state = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  count: 0,
  itemsOnPage: 0,
  users: [],
};

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
