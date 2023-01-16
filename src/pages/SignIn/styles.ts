import { StyleSheet } from "react-native";

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
    fontSize: 16,
    borderRadius: 6,
    color: "#15151e",
    padding: 8,
    width: '85%',
  },
  inputArea: {
    flexDirection: "row",
    width: '100%',
    borderRadius: 6,
    alignItems: "center",
    backgroundColor:  "#f1f1ef",
    marginTop: 20,
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: "center",
    alignItems: "center",
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

  checkboxContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    color: "#f1f1ef",
  },
  checkbox: {
    margin: 4,
  },
});