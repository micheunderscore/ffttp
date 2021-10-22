import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import React from "react";
import FlashMessage from "react-native-flash-message";
import { DrawerStack } from "./DrawerNavigator";
import styles from "./styles";

export type RootParamList = {
  example1: undefined;
  example2: undefined;
  drawer: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = observer(() => {
  return (
    <Stack.Navigator
      initialRouteName="drawer"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}>
      <Stack.Screen
        name="drawer"
        component={DrawerStack}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
});

export const RootNavigator = React.forwardRef<
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  // console.log(ref);
  return (
    <NavigationContainer {...props}>
      <RootStack />
      <FlashMessage titleStyle={styles.flashText} />
    </NavigationContainer>
  );
});

RootNavigator.displayName = "RootNavigator";
