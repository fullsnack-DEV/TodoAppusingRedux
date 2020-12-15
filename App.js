import React, { useState } from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//redux import

import { store } from "./Store/store";
import TodoScreen from "./Screen/TodoScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={TodoScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  todocontainer: {
    flex: 1,
  },
});
