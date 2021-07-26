import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [id, password] = useState("");
  const [massage, setMassage] = useState("");

  const checkingIdPW = () => {
    if (id == "dori" && password == "1234") {
      setMassage("");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>당신의 계정을 입력하세요!</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="id"
        value={id}
        onChange={(value) => (id = value)}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="password"
        value={password}
        onChange={(value) => (password = value)}
      ></TextInput>
      <TouchableHighlight style={styles.signIn}>
        <Text>Sign In</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    height: 50,
    paddingLeft: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    borderRadius: 20,
  },
  signIn: {
    backgroundColor: "#bbbbff",
    borderRadius: 20,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
