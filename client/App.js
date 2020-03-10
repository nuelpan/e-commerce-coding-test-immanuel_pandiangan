import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/TabNavigation";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}
