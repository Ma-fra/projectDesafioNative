import React from "react";

import { Routes } from "./src/services/Routes";

import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor= "#15151e" barStyle="light-content" />
      <Routes />
    </>
  );
}
