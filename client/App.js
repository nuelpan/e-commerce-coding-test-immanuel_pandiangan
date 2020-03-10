import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/TabNavigation";
import { Provider } from "react-redux";
import store from "./store";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font
      });
      setReady(true);
    };
    loadFont();
  }, []);
  if (!ready) {
    return <Text>Loading...</Text>;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}
