import { FETCH_ALL_PRODUCTS, BUY_PRODUCT } from "../actionTypes";
import axios from "axios";
import { Alert } from "react-native";

export const fetchAllProducts = () => (dispatch, getState) => {
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
};

export const buyProduct = payload => (dispatch, getState) => {
  axios({
    method: "POST",
    url: "http://35.236.151.184/transactions/create",
    data: {
      userId: payload.userId,
      productId: payload.productId,
      requiredQty: payload.requiredQty
    },
    headers: { token: payload.token }
  })
    .then(({ data }) => {
      dispatch(fetchAllProducts());
      Alert.alert("Purchasing Success");
    })
    .catch(err => console.log(err));
};
