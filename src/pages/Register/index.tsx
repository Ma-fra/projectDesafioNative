import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  useColorScheme,
} from "react-native";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";

export function Register() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <>
      <View style={[styles.container, themeContainerStyle]}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={[styles.message, themeTextStyle]}>Crie sua conta</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <View style={styles.inputArea}>
            <TextInput placeholder="Email" style={styles.input} />
          </View>

          <View style={styles.inputArea}>
            <TextInput
              placeholder="Senha"
              style={styles.input}
              value={input}
              onChangeText={(texto) => setInput(texto)}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color="#15151e" size={25} />
              ) : (
                <Ionicons name="eye-off" color="#15151e" size={25} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.inputArea}>
            <TextInput
              placeholder="Confirmar senha"
              style={styles.input}
              value={input}
              onChangeText={(texto) => setInput(texto)}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color="#15151e" size={25} />
              ) : (
                <Ionicons name="eye-off" color="#15151e" size={25} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.button, themeContainerStyle]}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.buttonText, themeTextStyle]}>Criar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </>
  );
}
