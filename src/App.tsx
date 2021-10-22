/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./navigation";

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";

function App() {
  return (
    <SafeAreaProvider style={{ height: "100%", width: "100%" }}>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
