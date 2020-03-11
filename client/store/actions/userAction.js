import { SET_TOKEN, LOGIN } from "../actionTypes";
import axios from "axios";
import { Alert, AsyncStorage } from "react-native";

export const setToken = token => (dispatch, getState) => {
  dispatch({
    type: SET_TOKEN,
    token
  });
};

export const login = payload => async (dispatch, getState) => {
  try {
    const result = await axios({
      method: "POST",
      url: "http://35.236.151.184/auth/login",
      data: {
        username: payload.username,
        password: payload.password
      }
    });
    dispatch({
      type: LOGIN,
      user: result.data
    });
    await AsyncStorage.setItem("token", result.data.token);
  } catch (error) {
    console.log(error);
  }
};
