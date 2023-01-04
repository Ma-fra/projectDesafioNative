import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
  },
  containerForm: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#15151e",
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: "#f1f1ef"
  },
  input:{
    marginTop: 10,
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor:  "#f1f1ef",
    borderRadius: 6,
  },
  button:{
    width: '100%',
    borderRadius: 6,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText:{
    color: "#f1f1ef",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: "center",
  },
  registerText:{
    color: "#f1f1ef",
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