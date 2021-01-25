import React, { useRef } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
const SignUp: React.FC = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigation = useNavigation();
  function handleSubmit() {
    console.log("OK");
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <ScrollView style={styles.containerScroll}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 250,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#f2f2f2",
              }}
            >
              Criar sua conta
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: 10,
              paddingRight: 10,
              alignContent: "space-around",
            }}
          >
            <View style={styles.input}>
              <Icon style={styles.icon} name="user" size={20} color="#666360" />
              <TextInput
                style={styles.inputText}
                placeholder="Nome"
                placeholderTextColor="#666360"
                returnKeyType="next"
                onSubmitEditing={() => {
                  //@ts-ignore
                  emailRef.current.focus();
                }}
              />
            </View>

            <View style={styles.input}>
              <Icon style={styles.icon} name="mail" size={20} color="#666360" />
              <TextInput
                style={styles.inputText}
                placeholder="E-mail"
                placeholderTextColor="#666360"
                ref={emailRef}
                onSubmitEditing={() => {
                  //@ts-ignore
                  passwordRef.current.focus();
                }}
                returnKeyType="next"
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
            <View style={{ marginBottom: 30 }}>
              <Button onPress={handleSubmit}>Cadastrar</Button>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.contentCad}>
        <RectButton
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.RectButtonCreate}
        >
          <Icon
            name="arrow-left"
            size={20}
            color="#f2f2f2"
            style={styles.iconCad}
          ></Icon>
          <Text style={styles.TextColorCadButton}>Voltar para login</Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignUp;
