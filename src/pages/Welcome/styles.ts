import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    flex: 1,
    backgroundColor: "#f1f1ef",
    justifyContent: "center",
    alignItems: "center"
  },
  containerForm: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    backgroundColor: "#15151e"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
    color: "#f1f1ef"
  },  
  text: {
    fontSize: 18,
    marginTop: 20,
    color: "#f1f1ef"
  },
  button:{
    position: "absolute",
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: "center",
    bottom: '30%',
    alignItems: "center",
    justifyContent: "center"
  }, 
  buttonText: {
    fontSize: 18,
    color: "#f1f1ef",
    fontWeight: "bold"
  },
  lightContainer: {
    backgroundColor: "#f1f1ef", 
  },
  darkContainer: {
    backgroundColor: "#38383f",
  },
  lightThemeText: {
    color: "#38383f",
  },
  darkThemeText: {
    color: "#f1f1ef",
  },
});
