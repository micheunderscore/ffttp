import React, { memo } from "react";
import { Text } from "react-native";
import { color } from "../../../../theme";
import { Screen } from "../styles";

export const Tab2 = memo(() => {
  return (
    <Screen>
      <Text style={{ color: color.text, textAlign: "center" }}>
        Tab 2 Screen
      </Text>
    </Screen>
  );
});
