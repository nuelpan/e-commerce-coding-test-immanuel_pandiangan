import { SET_TOKEN, LOGIN, LOGOUT } from "../actionTypes";

const initialState = {
  token: null,
  user: {}
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      });
    case LOGIN:
      return Object.assign({}, state, {
        user: action.user
      });
    case LOGOUT:
      return Object.assign({}, state, {
        user: undefined
      });
    default:
      return state;
  }
}
