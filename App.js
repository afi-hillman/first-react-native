import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Job from "./src/screens/Job";

const App = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        ></Screen>
        <Screen name="Page1" component={Screen1}></Screen>
        <Screen name="Page2" component={Screen2}></Screen>
        <Screen name="Page3" component={Screen3}></Screen>
        <Screen name="Job" component={Job}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
