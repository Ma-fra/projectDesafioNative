import React, { useState, useContext } from "react";
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
import { AuthContext } from "../../context/auth";
import { storeLocalData } from "../../services/Async";

import { Api } from "../../services/Api/api";

export function SignIn({ navigation }) {
  // const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState<boolean>(true);
  const { armazenaDadosUsuarioLogin } = useContext(AuthContext);

  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const handleLogin = async () => {
    var tokenJwt: any = null;

    try {
      const retorno = await Api.post("/api/auth/login", {
        email: email,
        password: senha,
      });

      if (retorno.status === 200) {
        tokenJwt = retorno.data;

        armazenaDadosUsuarioLogin(tokenJwt["jwt-token"]);

        storeLocalData("user", tokenJwt);

        navigation.navigate("Home");
      }
    } catch (error) {
      Alerta("Oops!", "Login ou senha errados");
    }
  };

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
          <View style={styles.inputArea}>
            <TextInput
              placeholder="Digite seu email..."
              style={styles.input}
              onChangeText={setEmail}
              value={email}
            />
          </View>

          <Text style={styles.title}>Senha</Text>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="Digite sua senha."
              style={styles.input}
              // value={input}
              // onChangeText={(texto) => setInput(texto)}
              // secureTextEntry={hidePass}
              secureTextEntry={true}
              onChangeText={setSenha}
              value={senha}
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
            onPress={() => handleLogin()}
          >
            <Text style={[styles.buttonText, themeTextStyle]}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate("Register")}
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
