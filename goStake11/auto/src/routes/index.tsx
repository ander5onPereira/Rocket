import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: "#362354" },
      }}
      initialRouteName="SignIn"
    >
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitleStyle: { color: "rgba(255,255,255,0.9)" },
          headerShown: false,
          headerStyle: { backgroundColor: "rgba(0,0,0,0.2)" },
          headerLeft: (props) => (
            <HeaderBackButton {...props} onPress={() => {}} tintColor="#fff" />
          ),
        }}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitleStyle: { color: "rgba(255,255,255,0.9)" },
          headerShown: false,
          headerStyle: { backgroundColor: "rgba(0,0,0,0.2)" },
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              canGoBack
              onPress={() => {}}
              tintColor="#fff"
            />
          ),
        }}
      />
    </Auth.Navigator>
  );
};
export default AuthRoutes;
