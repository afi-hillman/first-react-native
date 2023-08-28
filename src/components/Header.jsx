import React from "react";
import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 20,
        backgroundColor: "white",
      }}
    >
      {/* <Text>LOGO</Text> */}
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 100, height: 20 }}
      />
      <Text>MENU</Text>
    </View>
  );
};

export default Header;
