import React, { useContext, useState, useEffect, ChangeEvent } from "react";

import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Image,
  useColorScheme,
  FlatList,
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Api } from "../services/Api/api";

interface IData {
  skill: number;
  id: number;
  name: string;
  version: string;
  description: string;
  imageUrl: string;
  user: number;
}

export function AdicionarSkills() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  const [modalVisible, setModalVisible] = useState(false);

  const [skills, setSkills] = useState<IData[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const skillsResponse = await Api.get(`/api/skills`);
        const skillsApi = skillsResponse.data;
        setSkills(skillsApi);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Skills</Text>

            <FlatList
              data={skills}
              refreshing={refresh}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.skills}>
                  <Image
                    source={{
                      uri: item.imageUrl,
                    }}
                    style={{ width: 50, height: 50 }}
                  />

                  <Text style={{ color: "#fff" }}>{item.name}</Text>
                  <Text style={{ color: "#fff" }}>{item.description}</Text>
                  <Text style={{ color: "#fff" }}>{item.version}</Text>
                </View>
              )}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[styles.textStyle, themeTextStyle]}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.textStyle, themeTextStyle]}>Adicionar Skills</Text>
      </Pressable>
    </View>
  );
}

export const styles = StyleSheet.create({
  lightThemeText: {
    color: "#2f414f",
  },
  darkThemeText: {
    color: "#f1f1ef",
  },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#B0C7DD",
  },
  buttonClose: {
    backgroundColor: "#B0C7DD",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center",
  },
  skills: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 12,
  },
});
