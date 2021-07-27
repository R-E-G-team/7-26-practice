import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

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
    <View>
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
      <TouchableOpacity style={styles.signIn} onPress={checkingIdPW}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  
export default Login;