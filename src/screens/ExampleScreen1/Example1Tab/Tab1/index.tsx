import React, { memo } from "react";
import { SafeAreaView, Text } from "react-native";
import { color } from "../../../../theme";
import { Screen } from "../styles";

export const Tab1 = memo(() => {
  return (
    <SafeAreaView>
      <Screen>
        <Text style={{ color: color.text, textAlign: "center" }}>
          Tab 1 Screen
        </Text>
      </Screen>
    </SafeAreaView>
  );
});
