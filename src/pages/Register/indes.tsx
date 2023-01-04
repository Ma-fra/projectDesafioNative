import React, { useContext } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Image,
  useColorScheme,
} from "react-native";
import { styles } from "./styles";

export function Register() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <View>
          <Text style={[styles.text, themeTextStyle]}>Tela registro</Text>
        </View>
      </SafeAreaView>
    </>
  );
}