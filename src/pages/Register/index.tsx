import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  useColorScheme,
} from "react-native";

import { postUser, RegistroUser } from "../../services/Api/Request/registroUser";
import Alerta from "../../components/alerta";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";

export function Register() {
  const navigation = useNavigation();

  const [hidePass, setHidePass] = useState(true);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState("");

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  function salvar() {
    let data: RegistroUser = {
      login: login,
      password: password,
    };
    console.log(data);

    if (password == validPass) {
      postUser(data)
        .then((res) => {
          console.log(res.data);
          Alerta("Parabéns!", "você foi cadastrado com sucesso!");
          navigation.navigate("SignIn");
        })
        .catch((err) => {
          Alerta("Oops!", "Este nome já está em uso!");
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
          <Text style={styles.title}>Usuário</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="Insira um nome"
              style={styles.input}
              accessibilityLabel="Input usuário."
              accessibilityHint="Insira um nome para login aqui."
              onChangeText={(value) => {
                setLogin(value);
              }}
            />
          </View>

          <Text style={styles.title}>Senha</Text>
          <View>
            <View style={styles.inputArea}>
              <TextInput
                placeholder="Insira uma senha"
                style={styles.input}
                // value={input}
                // onChangeText={(texto) => setInput(texto)}
                secureTextEntry={hidePass}
                accessibilityLabel="Input senha."
                accessibilityHint="Insira sua melhor senha aqui."
                onChangeText={(value) => {
                  setPassword(value);
                }}
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
          </View>
          <Text style={styles.title}>Confirme sua senha</Text>
          <View>
            <View style={styles.inputArea}>
              <TextInput
                placeholder="Validar senha"
                secureTextEntry={true}
                style={styles.input}
                accessibilityLabel="Input senha."
                accessibilityHint="Repita a sua senha aqui para confirmar."
                onChangeText={(value) => {
                  setValidPass(value);
                }}
              />
              {/* <TouchableOpacity
                style={styles.icon}
                onPress={() => setHidePass(!hidePass)}
              >
                {hidePass ? (
                  <Ionicons name="eye" color="#15151e" size={25} />
                ) : (
                  <Ionicons name="eye-off" color="#15151e" size={25} />
                )}
              </TouchableOpacity> */}
            </View>
          </View>

          <TouchableOpacity
            style={[styles.button, themeContainerStyle]}
            // onPress={() => navigation.navigate("SignIn")}
            accessibilityLabel="Botão criar."
            accessibilityHint="Terminou de preencher todos os campos? Clique aqui para fazer login."
            onPress={() => {
              salvar();
            }}
          >
            <Text style={[styles.buttonText, themeTextStyle]}>Criar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </>
  );
}
