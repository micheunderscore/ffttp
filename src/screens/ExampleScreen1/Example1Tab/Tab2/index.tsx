import React, { memo } from "react";
import { Image, Text } from "react-native";
import { color } from "../../../../theme";
import { Screen } from "../styles";

const dog = require("../../../../assets/yes-dog.gif");

export const Tab2 = memo(() => {
  return (
    <Screen style={{ alignItems: "center" }}>
      <Text style={{ color: color.text, textAlign: "center" }}>
        Tab 2 Screen
      </Text>
      <Image source={dog} style={{ width: "100%", resizeMode: "stretch" }} />
    </Screen>
  );
});
