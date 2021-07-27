import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [rgId, setRgId] = useState("");
  const [rgPassword, setRgPassword] = useState("");

  const logInCheck = () => {
    
  }

  return (
    <View style={styles.container}>
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
