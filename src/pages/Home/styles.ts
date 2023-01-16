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
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
  },
  skills: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 12,
  }
});

//   "#f1f1ef",
//   "#211f1f",
//   "#38383f"
//   "#B0C7DD"