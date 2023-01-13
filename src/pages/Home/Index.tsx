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
  Pressable,
} from "react-native";

import { styles } from "./styles";
// import da interface
import ISkillData from "../../services/Api/Request/ISkills";
// import dos métodos
import UserSkillData from "../../services/Api/Request/userSkillService";
import SkillData from "../../services/Api/Request/skillsService";
import { AdicionarSkills } from "../../components/adicionarSkills";

const Home: React.FC = () => {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [skills, setSkills] = useState<Array<ISkillData>>([]);
  const [currentSkills, setCurrentSkills] = useState<ISkillData | null>(null);


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
        <AdicionarSkills />
      </SafeAreaView>
    </>
  );
};

export default Home;
