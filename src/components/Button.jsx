import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";

const Button = ({ children = "Button", ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      style={{
        backgroundColor: "#FFD580",
        borderRadius: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        ...rest.style,
      }}
    >
      <Text
        style={{
          fontSize: 40,
          justifyContent: "center",
          textAlign: "center",
          ...rest.style,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
