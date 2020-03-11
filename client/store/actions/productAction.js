import { FETCH_ALL_PRODUCTS } from "../actionTypes";
import axios from "axios";

export const fetchAllProducts = () => (dispatch, getState) => {
  // export async function fetchAllProducts(dispatch, getState) {
  // dispatch({
  //   type: LOADER,
  //   loader: true
  // });
  axios({
    method: "POST",
    url: "http://35.236.151.184/products"
  })
    .then(({ data }) => {
      dispatch({
        type: FETCH_ALL_PRODUCTS,
        products: data
      });
    })
    .catch(err => console.log(err));
  //   .catch(err => {
  //     console.log(err);
  //     dispatch({
  //       type: ERROR,
  //       error: err
  //     });
  //   });
};
