import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { color } from "../../theme";
import { Screen, Title } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const Example2 = () => {
  // const {} = props;
  const navigation = useNavigation();

  const navigateButton = () => {
    navigation.navigate("login", { loginCreds: "CAT" });
  };

  return (
    <Screen>
      <View>
        <Button
          onPress={navigateButton}
          title="GO TO LOGIN"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={{ color: color.text, textAlign: "center" }}>
          {`This is an\n`}
          <Title>EXAMPLE</Title>
          {`\nof how to do\n`}
          <Title>SCREENS</Title>
        </Text>
      </View>
    </Screen>
  );
};
