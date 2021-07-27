import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignUp = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const checkingIdPW = () => {
    if (id === "dori" && password === "1234") {
      setMessage("로그인 성공");
    } else {
      setMessage("로그인 실패");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>새로운 계정을 입력하세요!</Text>
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
      <TouchableOpacity style={styles.signIn} onPress={checkingIdPW}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancle} onPress={props.onClick}>
        <Text>Cancle</Text>
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
    marginBottom: 10
  },
  cancle: {
    backgroundColor: "#ffbbbb",
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

export default SignUp;
