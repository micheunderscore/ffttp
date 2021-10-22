import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { ExampleScreen1 } from "../screens/ExampleScreen1";
import { ExampleScreen2 } from "../screens/ExampleScreen2";
import { color } from "../theme";

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: color.background
        },
        headerTintColor: color.primary
      }}>
      <Drawer.Screen name="Example 1" component={ExampleScreen1} />
      <Drawer.Screen name="Example 2" component={ExampleScreen2} />
    </Drawer.Navigator>
  );
};
