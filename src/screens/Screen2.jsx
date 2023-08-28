import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
const Screen2 = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Screen 2</Text>
    </SafeAreaView>
  );
};

export default Screen2;
