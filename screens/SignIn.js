import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Login = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("당신의 계정을 입력하세요!");

  const checkingIdPW = () => {
    if (props.id === id && props.password === password) {
      setMessage("로그인 성공");
    } else {
      setMessage("로그인 실패");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>{message}</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="id"
        value={id}
        onChangeText={(value) => setId(value)}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="password"
        value={password}
        onChangeText={(value) => setPassword(value)}
      ></TextInput>
      <TouchableOpacity onPress={props.onClick}>
        <Text style={styles.signUp}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signIn} onPress={checkingIdPW}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  signUp: {
      color: 'blue',
      marginBottom: 20
  }
});

export default Login;
