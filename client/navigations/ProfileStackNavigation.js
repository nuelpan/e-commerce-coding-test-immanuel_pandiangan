import React, { useEffect } from "react";
import { AsyncStorage, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { setToken } from "../store/actions/userAction";

import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default function StackNavigation() {
  const dispatch = useDispatch();

  async function getToken() {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        dispatch(setToken(value));
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
