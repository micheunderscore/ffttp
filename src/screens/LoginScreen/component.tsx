import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { color } from "../../theme";
import { Screen, Title } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const Login = () => {
  // const {} = props;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <View>
        <TouchableOpacity style={{ opacity: 0.5 }} onPress={goBack}>
          <Text style={{ color: color.text, textAlign: "center" }}>
            {`This is an\n`}
            {/* `THIS IS A LITERAL` */}
            <Title>LOGIN</Title>
            {`\nof how to do\n`}
            <Title>SCREENS</Title>
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};
