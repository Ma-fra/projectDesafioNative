import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
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
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    color: "#f1f1ef",
  },
  input: {
    fontSize: 16,
    width: "85%",
    padding: 8,
    color: "#15151e",
  },
  button: {
    width: "100%",
    borderRadius: 6,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#f1f1ef",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#f1f1ef",
  },
  inputArea: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "#f1f1ef",
    marginTop: 20,
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
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
