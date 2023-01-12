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
} from "react-native";
import { styles } from "./styles";
// import da interface
import ISkillData from "../../services/Api/Request/ISkills";
// import dos métodos
import UserSkillData from "../../services/Api/Request/userSkillService";
import SkillData from "../../services/Api/Request/skillsService";

const Home: React.FC = () => {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [skills, setSkills] = useState<Array<ISkillData>>([]);
  const [currentSkills, setCurrentSkills] = useState<ISkillData | null>(null);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    retrieveSkills();
  }, []);

  const retrieveSkills = () => {
    SkillData.getAll()
      .then((Response: any) => {
        setSkills(Response.data);
        console.log(Response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const removeAllSkills = () => {
    UserSkillData.removeAll()
      .then((Response: any) => {
        console.log(Response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        {/* <View>
          <Text style={[styles.text, themeTextStyle]}>Tela home</Text>
        </View> */}
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
      </SafeAreaView>
    </>
  );
};

export default Home;