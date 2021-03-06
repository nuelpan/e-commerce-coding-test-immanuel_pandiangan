import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./reducers/productsReducer";
import usersReducer from "./reducers/usersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer
});

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
