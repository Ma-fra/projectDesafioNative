import React, { useState, useEffect } from "react";
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

import Alerta from "../../components/Alert";
import {
  postUser,
  RegistroUser,
} from "../../services/Api/Request/registroService";

export function Register({ navigation }) {
  // const navigation = useNavigation();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [validPass, setValidPass] = useState(null);

  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  function salvar() {
    let data: RegistroUser = {
      // id: nome,
      login: email,
      password: password,
    };
    console.log(data);

    if (password == validPass) {
      postUser(data)
        .then((res) => {
          console.log(res.data);
          Alerta("Parabéns!", "você foi cadastrado com sucesso!");
          navigation.navigate("Login");
        })
        .catch((err) => {
          Alerta(
            "Oops!",
            " Este e-mail já está em uso, verique-o ou recupere sua senha"
          );
          console.log(err);
        });
    } else {
      Alerta("Oops!", "As senhas não coincidem");
    }
  }

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
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={(value) => {
                setEmail(value);
              }}
              accessibilityHint="Insira seu e-mail favorito."
            />
          </View>

          <View style={styles.inputArea}>
            <TextInput
              placeholder="Senha"
              style={styles.input}
              // value={input}
              onChangeText={(value) => {
                setPassword(value);
              }}
              secureTextEntry={hidePass}
              accessibilityHint="Insira uma senha."
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
              onChangeText={(value) => {
                setValidPass(value);
              }}
              secureTextEntry={true}
              accessibilityHint="Insira sua senha novamente para valida-la."
            />
            <TouchableOpacity
              style={styles.icon}
              // onPress={() => setHidePass(!hidePass)}
              onPress={() => {
                salvar();
              }}
              accessibilityLabel="Botão criar."
              accessibilityHint="Clique aqui para finalizar a criação da sua conta."
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
