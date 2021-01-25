import React from "react";
import { TextInputProps, View, TextInput } from "react-native";

/* import { Container, TextInput, Icon } from "./styles"; */
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";
interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <View style={styles.input}>
      <Icon style={styles.icon} name={icon} size={20} color="#666360" />
      <TextInput
        style={styles.inputText}
        placeholderTextColor="#666360"
        {...rest}
      />
    </View>
  );
};
export default Input;
