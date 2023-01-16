import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1C2B",
    justifyContent: "space-between",
  },
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
  textTitle: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  text: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  exit: {
    margin: 20,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  exitText: {
    fontSize: 20,
    marginTop: 1,
    marginLeft: 15,
  },
  App: {
    fontSize: 20,
  },
  Version: {
    fontSize: 15,
  },
  InfoApp: {
    marginBottom: 50,
    alignItems: "center",
  },
  viewImg: {
    flexDirection: "row",
  },
  imgLogo: {
    height: 120,
    width: 120,
    marginRight: 5,
  },
});
