// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_GET_USERS_START = 'SEARCH_GET_USERS_START';
export const SEARCH_GET_USERS_END = 'SEARCH_GET_USERS_END';

import auth from '../../auth/modules/auth';

const config = require('../../../../config');

// ------------------------------------
// Actions
// ------------------------------------
export function getUsers(page) {
  return async (dispatch) => {

    dispatch({ type: SEARCH_GET_USERS_START, payload: { loading: true, count: 0, itemsOnPage: 0, users: [], }});

    try {
      const itemsOnPage = config.itemsOnSearchPage;
      let pagination = '&limit=' + itemsOnPage;
      if (page && 1 < +page) {
        pagination = '&skip=' + (+page - 1) * itemsOnPage + '&limit=' + itemsOnPage;
      }

      const url = config.serverUrl + '/api/users?userType=stylist' + pagination;      

      const response = await fetch(
        url,
        {
          method: 'GET',          
          pagination: JSON.stringify(pagination),
          headers: { 'Authorization': `bearer ${auth.getToken()}` },
        }
      );
      const data = await response.json();

      dispatch({ type: SEARCH_GET_USERS_END, payload: { loading: false, count: data.count, itemsOnPage: itemsOnPage, users: data.users, }});
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
  loading: false,
  count: 0,
  itemsOnPage: 0,
  users: [],
};

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
