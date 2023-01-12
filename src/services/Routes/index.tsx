import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Welcome } from "../../pages/Welcome";
import { SignIn } from "../../pages/SignIn";
import Home from "../../pages/Home/Index";
import Register from "../../pages/Register";
import { Settings } from "../../pages/Settings";
import { Image, View } from "react-native-animatable";

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
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#B0C7DD",
        tabBarInactiveTintColor: "#211f1f",
        tabBarActiveBackgroundColor: "#211f1f",
        tabBarInactiveBackgroundColor: "#B0C7DD",
      }}
    >
      <Tab.Screen
        name="Principal"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/casinha.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#B0C7DD" : "#211f1f",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/engrenagem.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#B0C7DD" : "#211f1f",
                }}
              />
            </View>
          ),
        }}
      />
      
    </Tab.Navigator>
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

//   "#f1f1ef",
//   "#211f1f",
//   "#38383f"
//   "#B0C7DD"
