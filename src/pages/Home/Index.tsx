import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  useColorScheme,
  FlatList,
} from "react-native";
import { Api } from "../../services/Api/api";
import { styles } from "./styles";
import { AdicionarSkills } from "../../components/adicionarSkills";
interface IData {
  skill: number;
  id: number;
  name: string;
  version: string;
  description: string;
  imageUrl: string;
  user: number;
}

export function Home() {
  const colorScheme = useColorScheme();
  const [id1, setId1] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [skills, setSkills] = useState<IData[]>([]);
  const [skillsFilter, setSkillsFilter] = useState<IData[]>([]);

  const [infoSkills, setInfoSkills] = useState<IData[]>([]);

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const EmptyListMessage = () => {
    return (
      <Text style={[styles.emptyListStyle, themeTextStyle]}>
        Você ainda não tem nenhuma skill!
      </Text>
    );
  };

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("id");
        if (value !== null) {
          const currentUser = JSON.parse(value);
          setId1(currentUser);
        }
      } catch (error) {}
    };
    _retrieveData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const contasResponse = await Api.get(`/api/userSkills`);
        const contasApi = contasResponse.data;
        var array = contasApi;

        setSkillsFilter(
          array.filter(function (el: any) {
            return el.user === Number(id1);
          })
        );
      } catch (error) {}
    }

    fetchData();
  }, [id1]);
  useEffect(() => {
    async function fetchData1() {
      try {
        console.log(skillsFilter.length);
        if (skillsFilter.length > 0 && infoSkills.length > 0) {
          infoSkills.pop();
        }
        for (var i = 0; i < skillsFilter.length; i++) {
          const contasResponse = await Api.get(
            `/api/skills/` + skillsFilter[i].skill.toString()
          );
          const contasApi = contasResponse.data;
          infoSkills.push(contasApi);
        }
        setRefresh(!refresh);
      } catch (error) {}
    }

    fetchData1();
  }, [skillsFilter]);

  return (
    <>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <AdicionarSkills />

        <FlatList
          data={infoSkills}
          refreshing={refresh}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.skills}>
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                style={{ width: 50, height: 50, borderRadius: 20 }}
              />
              <View style={styles.informations}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.version}>{item.version}</Text>
              </View>
            </View>
          )}
          ListEmptyComponent={EmptyListMessage}
        />
      </SafeAreaView>
    </>
  );
}
