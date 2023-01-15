import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Image,
  useColorScheme,
  FlatList,
} from "react-native";
import { Api } from "../../services/Api/api";
import { styles } from "./styles";
//10156
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

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("id");
        if (value !== null) {
          // We have data!!
          const currentUser = JSON.parse(value);

          setId1(currentUser);
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    _retrieveData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(id1);

        const contasResponse = await Api.get(`/api/userSkills`);
        console.log("passou aqui");

        const contasApi = contasResponse.data;
        var array = contasApi;

        setSkillsFilter(
          array.filter(function (el: any) {
            console.log("user", el.user);

            return el.user === Number(id1);
          })
        );
      } catch (error) {
        console.log(error);
      }
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
          console.log("foi?");

          infoSkills.push(contasApi);
        }
        setRefresh(!refresh);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData1();
  }, [skillsFilter]);

  return (
    <>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <View>
          <Text style={[styles.text, themeTextStyle]}>Tela home</Text>
        </View>
        <FlatList
          data={infoSkills}
          refreshing={refresh}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#000",
                padding: 20,
                borderRadius: 12,
              }}
            >
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
      </SafeAreaView>
    </>
  );
}
