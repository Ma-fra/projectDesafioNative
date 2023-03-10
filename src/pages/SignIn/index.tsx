import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  useColorScheme,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { Api } from "../../services/Api/api";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import Checkbox from "expo-checkbox";
import { storeData } from "../../services/AsyncStorage/LocalStorageService";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IData {
  id: number;
  password: string;
  login: string;
}

export function SignIn() {
  const navigation = useNavigation();

  const [contas, setContas] = useState<IData[]>([]);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const [hidePass, setHidePass] = useState(true);
  const [isChecked, setChecked] = useState(false);

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  useEffect(() => {
    async function fetchData() {
      try {
        const contasResponse = await Api.get(`/api/users`);
        const contasApi = contasResponse.data;
        setContas(contasApi);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // readPassword();
  }, []);

  const handleLogin = () => {
    if (usuario.length <= 0 || password.length <= 0) {
      Alert.alert("Por favor preencher todos os campos.");
      return;
    }
    var loginExiste = false;
    for (var i = 0; i < contas.length; i++) {
      if (contas[i].password == password && contas[i].login == usuario) {
        loginExiste = true;
        storeData(contas[i].id.toString(), "id");
        break;
      } else {
        continue;
      }
    }
    if (loginExiste === false) {
      Alert.alert("Usu??rio ou/ e senha incorretos.");
    } else {
      navigation.navigate("Home");
      storeData;
    }
  };

  // const savePassword = async () => {
  //   try {
  //     await AsyncStorage.setItem('@storage_Key', password);
  //     Alert.alert("Senha salva!");
  //   } catch (e) {
  //     Alert.alert("Erro ao salvar senha.");
  //   }
  // };

  // const readPassword = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key');
  //     if (value !== null) {
  //       setPassword(value);
  //     }
  //   } catch (e) {
  //     Alert.alert("Erro ao buscar informa????o.");
  //   }
  // };

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
          <Text style={styles.title}>Usu??rio</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="Digite o seu nome de usu??rio"
              style={styles.input}
              accessibilityLabel="Input de usu??rio."
              accessibilityHint="Insira o seu nome de usu??rio cadastrado."
              onChangeText={(value) => {
                setUsuario(value);
              }}
            />
          </View>

          <Text style={styles.title}>Senha</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="Digite sua senha"
              secureTextEntry={hidePass}
              style={styles.input}
              accessibilityLabel="Input senha."
              accessibilityHint="Insira a sua senha cadastrada."
              // onChangeText={(value) => setPassword(value)}
              // value={textInputValue}
              onChangeText={(data) => setPassword(data)}
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
                accessibilityLabel="Caixinha de sele????o."
                accessibilityHint="Quer que a gente lembre a sua senha para o futuro? Clique aqui."
                // onValueChange={saveValueFunction}
              />
              <Text style={styles.paragraph}>Lembrar senha</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.button, themeContainerStyle]}
            onPress={handleLogin}
          >
            <Text
              style={[styles.buttonText, themeTextStyle]}
              accessibilityLabel="Bot??o para acessar."
              accessibilityHint="J?? preencheu tudo? Clique aqui para entrar."
            >
              Acessar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate("Register")}
            accessibilityLabel="Bot??o n??o tem conta."
            accessibilityHint="Ainda n??o tem uma conta com a gente? Clique aqui para criar uma."
          >
            <Text style={styles.registerText}>
              N??o possui uma conta? Cadastre-se
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </>
  );
}
