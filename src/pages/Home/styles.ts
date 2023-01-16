import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  centeredView: {
    flex: 1,
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
  },
  skills: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#38383f",
    padding: 20,
    borderRadius: 12,
  },
  title: {
    color: "#fff",
    fontSize: 26,
  },
  description: {
    color: "#fff",
    fontSize: 16,
  },
  version: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 3,
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 16,
    alignItems: "center",
    textAlign: "center",
  },
  informations: {
    flexDirection: "column",
    marginLeft: 12,
  },
});

//   "#f1f1ef",
//   "#211f1f",
//   "#38383f"
//   "#B0C7DD"
