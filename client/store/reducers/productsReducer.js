import { FETCH_ALL_PRODUCTS } from "../actionTypes";

const initialState = {
  allProducts: []
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return Object.assign({}, state, {
        allProducts: action.products
      });
    default:
      return state;
  }
}
