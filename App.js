import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

export default function App() {
  const [rgId, setRgId] = useState("");
  const [rgPassword, setRgPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const signUpHandler = (putId, putPassword) => {
    setRgId(putId);
    setRgPassword(putPassword);
  };

  const onClick = () => {
    setIsLogin(!isLogin);
  };

  const logInCheck = () => {};

  return (
    <View>
      {isLogin && <SignIn onClick={onClick} id={rgId} password={rgPassword} />}
      {!isLogin && <SignUp onClick={onClick} onSignUp={signUpHandler} />}
    </View>
  );
}

const styles = StyleSheet.create({});
