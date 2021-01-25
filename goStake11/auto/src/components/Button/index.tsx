import React from "react";
import { Text, View } from "react-native";
import { RectButtonProperties, RectButton } from "react-native-gesture-handler";

import styles from "./styles";
interface ButtonProps extends RectButtonProperties {
  children: string;
  color?: string;
}
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <RectButton {...rest} style={styles.btnCad}>
      <Text style={styles.textButtonIn}>{children}</Text>
    </RectButton>
  );
};
export default Button;
