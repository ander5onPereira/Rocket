import React, { useRef } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import Button from "../../components/Button";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

import styles from "./styles";
const SignIn: React.FC = () => {
  const passwordRef = useRef();
  const navigation = useNavigation();
  function handleSubmit() {
    console.log("OK");
  }
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={styles.container}>
            <Text style={{ color: "#f2f2f2", marginBottom: 10 }}>
              Faça seu login
            </Text>

            <View style={styles.input}>
              <Icon style={styles.icon} name="mail" size={20} color="#666360" />
              <TextInput
                style={styles.inputText}
                placeholder="E-mail"
                placeholderTextColor="#666360"
                returnKeyType="next"
                onSubmitEditing={() => {
                  //@ts-ignore
                  passwordRef.current.focus();
                }}
              />
            </View>

            <View style={styles.input}>
              <Icon style={styles.icon} name="lock" size={20} color="#666360" />
              <TextInput
                style={styles.inputText}
                placeholder="Senha"
                placeholderTextColor="#666360"
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
              />
            </View>

            <Button onPress={handleSubmit}>Entrar</Button>
            <TouchableOpacity style={styles.forgotPass}>
              <Text style={styles.forgotPassText}>Perdi minha senha</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.contentCad}>
        <RectButton
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={styles.RectButtonCreate}
        >
          <Icon
            name="log-in"
            size={20}
            color="#f2f2f2"
            style={styles.iconCad}
          ></Icon>
          <Text style={styles.TextColorCadButton}>Criar uma conta</Text>
        </RectButton>
      </View>
    </>
  );
};
export default SignIn;
