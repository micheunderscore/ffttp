import React from "react";
import { Text, View } from "react-native";
import { color } from "../../theme";
import { Screen, Title } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const Example2 = () => {
  // const {} = props;
  return (
    <Screen>
      <View>
        <Text style={{ color: color.text, textAlign: "center" }}>
          {`This is ea\n`}
          <Title>EXAMPLE</Title>
          {`\nof how to do\n`}
          <Title>SCREENS</Title>
        </Text>
      </View>
    </Screen>
  );
};
