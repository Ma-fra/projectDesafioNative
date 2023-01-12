import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1C2B",
    padding: Platform.OS === "ios" ? 64 : 30,
    paddingHorizontal: 30,
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
  text: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 39,
    fontWeight: "bold",
  },
  item: {

  },
  image: {

  },
});