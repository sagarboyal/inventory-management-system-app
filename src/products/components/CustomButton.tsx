import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type CustomButtonProps = {
  title: string;
  icon?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  onComplete: () => void;
};

const CustomButton = ({
  title,
  icon,
  textStyle,
  viewStyle,
  onComplete,
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        viewStyle,
        pressed && styles.pressed,
      ]}
      onPress={onComplete}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        {icon ? icon : null}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary[900],
    height: 34,
    borderRadius: 5,
    justifyContent: "center",
  },
  text: {
    fontFamily: fonts.medium_500,
    fontSize: 14,
    textAlign: "center"
  },
  pressed: {
    opacity: 0.7,
  },
});
