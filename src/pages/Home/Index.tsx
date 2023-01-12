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

export function Home() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <View>
          <Text style={[styles.text, themeTextStyle]}>Tela home</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

// import React, { useEffect } from "react";

// import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
// import axios from "axios";
// import { Api } from "../../services/Api/api";

// const persons = [
//   {
//     id: "1",
//     name: "Earnest Green",
//     description: "gfcuayhç",
//   },
//   {
//     id: "2",
//     name: "Winston Orn",
//     description: "çljmkhjm",
//   },
//   {
//     id: "3",
//     name: "Carlton Collins",
//     description: "fsdbdfbsdf",
//   },
//   {
//     id: "4",
//     name: "Malcolm Labadie",
//     description: "aaasdawrdawd",
//   },
//   {
//     id: "5",
//     name: "Michelle Dare",
//     description: "csdlsdkcnsd",
//   },
// ];

// export function Home() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Lista de Skills</Text>
//       <FlatList
//         data={persons}
//         renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
//         keyExtractor={(item) => item.id}
//       />

//       <Text>Minhas Skills</Text>
//       <FlatList
//         data={persons}
//         renderItem={({ item }) => <Text style={styles.item}>{item.description}</Text>}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 50,
//     flex: 1,
//   },
//   item: {
//     padding: 20,
//     fontSize: 15,
//     marginTop: 5,
//   },
// });

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Home() {
//   const [skills, getSkills] = useState("");

//   const url = "http://107.178.219.190:8080/api/";

//   useEffect(() => {
//     getAllSkills();
//   }, []);

//   const getAllSkills = () => {
//     axios
//       .get(`${url}skills`)
//       .then((Response) => {
//         const allSkills = Response.data.skills.allSkills;
//         getSkills(allSkills);
//       })
//       .catch((error) => console.error(`Error: $(error)`));
//   };
//   return (

//   )
// }
