import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  useColorScheme,
} from "react-native";

import { styles } from "./styles";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

export function SignIn() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const [isChecked, setChecked] = useState(false);

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
          <Text style={styles.title}>Usuário</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="Digite o seu nome de usuário"
              style={styles.input}
              accessibilityLabel="Input de usuário."
              accessibilityHint="Insira o seu nome de usuário cadastrado."
            />
          </View>

          <Text style={styles.title}>Senha</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="Digite sua senha."
              style={styles.input}
              value={input}
              onChangeText={(texto) => setInput(texto)}
              secureTextEntry={hidePass}
              accessibilityLabel="Input de senha."
              accessibilityHint="Insira a sua senha cadastrada."
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

          <View style={styles.checkboxContainer}>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#B0C7DD" : undefined}
                accessibilityLabel="Caixinha de seleção."
                accessibilityHint="Quer que a gente lembre a sua senha para o futuro? Clique aqui."
              />
              <Text style={[styles.paragraph, themeTextStyle]}>
                Salvar senha
              </Text>
            </View>
          </View>

          <TouchableOpacity style={[styles.button, themeContainerStyle]}>
            <Text
              style={[styles.buttonText, themeTextStyle]}
              accessibilityLabel="Botão para acessar."
              accessibilityHint="Já preencheu tudo? Clique aqui para entrar."
            >
              Acessar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate("Register")}
            accessibilityLabel="Botão não tem conta."
            accessibilityHint="Ainda não tem uma conta com a gente? Clique aqui para criar uma."
          >
            <Text style={styles.registerText}>
              Não possui uma conta? Cadastre-se
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </>
  );
}
