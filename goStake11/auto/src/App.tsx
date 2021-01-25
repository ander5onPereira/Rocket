import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="light" translucent />
    </NavigationContainer>
  );
};

export default App;
