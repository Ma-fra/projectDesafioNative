import React, { useContext } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  useColorScheme,
} from "react-native";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export function SignIn() {
  const navigation = useNavigation();

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
          <Text style={[styles.message, themeTextStyle]}>Bem-vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Email</Text>
          <TextInput placeholder="Digite um email..." style={[styles.input, themeTextStyle]} />

          <Text style={styles.title}>Senha</Text>
          <TextInput placeholder="Digite sua senha." style={styles.input} />

          <TouchableOpacity style={[styles.button, themeContainerStyle]}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}
          onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>


        </Animatable.View>
      </View>
    </>
  );
}
