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
import { Ionicons } from "@expo/vector-icons";

export function Settings() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <View>
          <Text style={[styles.textTitle, themeTextStyle]}>Configurações</Text>
          <Text style={[styles.text, themeTextStyle]}>
            Tema atual: {colorScheme}
          </Text>

          <TouchableOpacity
            style={styles.exit}
          >
            <Ionicons name="exit" size={28} style={themeTextStyle} />
            <Text style={[styles.exitText, themeTextStyle]}>Sair</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.InfoApp}>
          <View style={styles.viewImg}>
            <Image
              source={require("../../assets/butterfly.png")}
              style={styles.imgLogo}
            />
          </View>
          <Text style={[styles.App, themeTextStyle]}>Versão do App</Text>
          <Text style={[styles.Version, themeTextStyle]}>1.0.0</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
