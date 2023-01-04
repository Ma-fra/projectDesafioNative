import React, { useContext } from "react";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity, View, Text, useColorScheme } from "react-native";

import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <>
      <View style={[styles.container, themeContainerStyle]}>
        <View style={[styles.containerLogo, themeContainerStyle]}>
          <Animatable.Image
            animation="flipInY"
            source={require("../../assets/f1.png")}
            style={{ width: "80%" }}
            resizeMode="contain"
          />
        </View>
        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.containerForm}
        >
          <Text style={styles.title}>Texto que fala do que serve o app</Text>
          <Text style={styles.text}>Faça login para começar</Text>

          <TouchableOpacity
            style={[styles.button, themeContainerStyle]}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.buttonText, themeTextStyle]}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </>
  );
}