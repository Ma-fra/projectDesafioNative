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
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

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
          Alert.alert("Lista fechada.");
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
                <View style={[styles.skills, themeContainerStyle]}>
                  <Image
                    source={{
                      uri: item.imageUrl,
                    }}
                    style={{ width: 50, height: 50, borderRadius: 20 }}
                  />

                  <View style={styles.information}>
                    <Text style={[styles.textModal, themeTextStyle]}>
                      {item.name}
                    </Text>
                    <Pressable
                      style={styles.add}
                      // onPress={}
                    >
                      <Text style={[styles.addTextStyle, themeTextStyle]}>
                        Adicionar
                      </Text>
                    </Pressable>
                  </View>
                </View>
              )}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[styles.textStyle, themeTextStyle]}>Fechar</Text>
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
  lightContainer: {
    backgroundColor: "#f1f1ef",
  },
  darkContainer: {
    backgroundColor: "#211f1f",
  },
  lightThemeText: {
    color: "#2f414f",
  },
  darkThemeText: {
    color: "#f1f1ef",
  },
  centeredView: {
    flex: 1,
    marginTop: 2,
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 90,
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
    fontSize: 18,
    textAlign: "center",
  },
  modalText: {
    fontSize: 26,
    marginBottom: 15,
  },
  skills: {
    display: "flex",
    alignItems: "center",
    // flexDirection: "row",
    justifyContent: "center",
    padding: 6,
    borderRadius: 20,
    marginVertical: 4,
    marginHorizontal: 30,
  },
  textModal: {
    fontSize: 20,
    paddingLeft: 10,
  },
  information:{
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    marginLeft: 7
  },

  add: {
    backgroundColor: "#B0C7DD",
    borderRadius: 20,
    padding: 6,
    // alignItems:"center"
  },
  addTextStyle: { 
    fontSize: 16 
  },
});
