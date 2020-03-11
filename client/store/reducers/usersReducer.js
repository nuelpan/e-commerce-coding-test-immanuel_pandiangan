import { SET_TOKEN, LOGIN } from "../actionTypes";

const initialState = {
  token: "",
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
    default:
      return state;
  }
}
