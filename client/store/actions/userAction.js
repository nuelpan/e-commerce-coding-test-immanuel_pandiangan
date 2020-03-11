import { SET_TOKEN, LOGIN, LOGOUT } from "../actionTypes";
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
      user: result.data.user
    });
    await AsyncStorage.setItem("token", result.data.token);
  } catch (error) {
    Alert.alert(error.message);
  }
};

export const register = payload => async (dispatch, getState) => {
  try {
    const result = await axios({
      method: "POST",
      url: "http://35.236.151.184/users/create",
      data: {
        name: payload.name,
        username: payload.username,
        password: payload.password,
        credits: payload.credits
      }
    });
  } catch (error) {
    Alert.alert(error.message);
  }
};

export const logout = () => (dispatch, getState) => {
  try {
    dispatch({
      type: LOGOUT
    });
  } catch (error) {
    Alert.alert(error.message);
  }
};
