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
  const logInCheck = () => {
    
  }

  const onClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View>
        { isLogin && <SignIn onClick={onClick}/> }
        { !isLogin && <SignUp onClick={onClick}/> }
    </View>
  );
}

const styles = StyleSheet.create({});
