import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../../pages/Welcome";
import { SignIn } from "../../pages/SignIn";
import { Home } from "../../pages/Home/Index";
import { Register } from "../../pages/Register/indes";

function HomeTabStack() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <HomeTabStack />
      </NavigationContainer>
    </>
  );
}
